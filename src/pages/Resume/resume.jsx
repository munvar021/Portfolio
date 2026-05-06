import { useState, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import styled from "styled-components";
import resumePath from "../../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PageHero = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0 2rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 280px;
    background: radial-gradient(
      ellipse,
      rgba(0, 212, 255, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const PageLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-cyan);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--accent-cyan);
  }
`;

const PageTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text-primary);
  margin-bottom: 1rem;

  span {
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Controls = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem 0 3rem;
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  padding: 4px;
  gap: 2px;
`;

const ToggleBtn = styled.button`
  padding: 0.45rem 1.125rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: ${({ $active }) =>
    $active ? "linear-gradient(135deg, #00D4FF, #7C3AED)" : "transparent"};
  color: ${({ $active }) => ($active ? "#000" : "var(--text-secondary)")};
  transition: all 0.25s;

  &:hover {
    color: ${({ $active }) => ($active ? "#000" : "var(--text-primary)")};
  }
`;

const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.07);
    color: var(--accent-cyan);
  }

  i {
    font-size: 0.8rem;
  }
`;

const ZoomRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ZoomLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
  min-width: 42px;
  text-align: center;
`;

const ViewerSection = styled.section`
  padding: 0 0 clamp(5rem, 10vw, 7rem);
`;

const ViewerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PdfBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: 2rem;
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;

  .react-pdf__Document {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .react-pdf__Page {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  @media (max-width: 640px) {
    padding: 1rem;
    border-radius: var(--radius-lg);
  }
`;

const LoaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 2rem;
  color: var(--text-secondary);
  font-size: 0.875rem;

  i {
    font-size: 2rem;
    color: var(--accent-cyan);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorBox = styled.div`
  padding: 2rem;
  text-align: center;
  color: #ef4444;
  font-size: 0.875rem;
`;

const PageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const NavBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover:not(:disabled) {
    border-color: rgba(0, 212, 255, 0.3);
    color: var(--accent-cyan);
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const PageNum = styled.span`
  font-family: var(--font-mono);
  font-size: 0.825rem;
  color: var(--text-secondary);
`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enhanced, setEnhanced] = useState(false);
  const [scale, setScale] = useState(1.2);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!enhanced) return;
    const onKey = (e) => {
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
    a.href = resumePath;
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
            Resume
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

              <Document
                file={resumePath}
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
