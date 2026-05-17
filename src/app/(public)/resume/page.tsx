"use client";

import { useState, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  PageHero,
  PageLabel,
  PageTitle,
  Controls,
  ToggleGroup,
  ToggleBtn,
  ActionBtn,
  ZoomRow,
  ZoomLabel,
  ViewerSection,
  ViewerWrap,
  PdfBox,
  LoaderBox,
  ErrorBox,
  PageNav,
  NavBtn,
  PageNum,
} from "./resume.styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [scale, setScale] = useState(1.2);
  const [winWidth, setWinWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWinWidth(window.innerWidth);
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!enhanced) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setPageNumber((p) => Math.min(p + 1, numPages || 1));
      if (e.key === "ArrowLeft") setPageNumber((p) => Math.max(p - 1, 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enhanced, numPages]);

  const simpleScale = useMemo(() => {
    if (winWidth > 1200) return 1.2;
    if (winWidth > 992) return 1.0;
    if (winWidth > 768) return 0.8;
    if (winWidth > 576) return 0.65;
    return 0.5;
  }, [winWidth]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Munvar_Khajavali_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <PageHero>
        <div className="container">
          <PageLabel
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {">"} resume --view
          </PageLabel>
          <PageTitle
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            My <span>Professional</span> Resume
          </PageTitle>
        </div>
      </PageHero>

      <div className="container">
        <Controls
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ToggleGroup>
            <ToggleBtn $active={!enhanced} onClick={() => setEnhanced(false)}>
              Simple
            </ToggleBtn>
            <ToggleBtn $active={enhanced} onClick={() => setEnhanced(true)}>
              Enhanced
            </ToggleBtn>
          </ToggleGroup>

          {enhanced && (
            <ZoomRow>
              <ActionBtn
                onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}
                aria-label="Zoom out"
              >
                <i className="fa-solid fa-magnifying-glass-minus" />
              </ActionBtn>
              <ZoomLabel>{Math.round(scale * 100)}%</ZoomLabel>
              <ActionBtn
                onClick={() => setScale((s) => Math.min(s + 0.2, 2.5))}
                aria-label="Zoom in"
              >
                <i className="fa-solid fa-magnifying-glass-plus" />
              </ActionBtn>
              <ActionBtn onClick={() => setScale(1.2)} aria-label="Reset zoom">
                <i className="fa-solid fa-rotate-right" />
              </ActionBtn>
            </ZoomRow>
          )}

          <ActionBtn onClick={handleDownload}>
            <i className="fa-solid fa-download" /> Download PDF
          </ActionBtn>
        </Controls>
      </div>

      <ViewerSection>
        <div className="container">
          <ViewerWrap>
            <PdfBox>
              {loading && !error && (
                <LoaderBox>
                  <i className="fa-solid fa-spinner" />
                  <p>Loading resume...</p>
                </LoaderBox>
              )}
              {error && <ErrorBox>{error}</ErrorBox>}

              {mounted && (
                <Document
                  file="/resume.pdf"
                  onLoadSuccess={({ numPages: n }) => {
                    setNumPages(n);
                    setLoading(false);
                  }}
                  onLoadError={() => {
                    setLoading(false);
                    setError(
                      "Failed to load resume. Please download it instead.",
                    );
                  }}
                  loading={null}
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={enhanced ? scale : simpleScale}
                    renderTextLayer={false}
                  />
                </Document>
              )}

              {numPages && numPages > 1 && (
                <PageNav>
                  <NavBtn
                    onClick={() => setPageNumber((p) => p - 1)}
                    disabled={pageNumber <= 1}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </NavBtn>
                  <PageNum>
                    {pageNumber} / {numPages}
                  </PageNum>
                  <NavBtn
                    onClick={() => setPageNumber((p) => p + 1)}
                    disabled={pageNumber >= numPages}
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </NavBtn>
                </PageNav>
              )}
            </PdfBox>
          </ViewerWrap>
        </div>
      </ViewerSection>
    </>
  );
};

export default Resume;
