import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Animate from "../../components/Animate/animate";
import { slideInDown, fadeIn } from "../../styles/animations";
import {
  faDownload,
  faSpinner,
  faChevronLeft,
  faChevronRight,
  faSearchPlus,
  faSearchMinus,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import {
  ResumeContainer,
  ResumeHeader,
  ResumeTitle,
  ResumeActions,
  PdfContainer,
  PageControls,
  PageNavButton,
  PageNumber,
  PageLoader,
  ErrorMessage,
  ViewToggle,
  ToggleButton,
  Slider,
  ResumeInfo,
  ResumeDescription,
  ResumeMeta,
  ResumeDetails,
  ViewerControls,
  ZoomControls,
  ActionButton,
} from "./resumeStyles";
import resumePath from "../../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEnhancedView, setEnhancedView] = useState(false);
  const [scale, setScale] = useState(1.2);
  const [width, setWidth] = useState(1200);

  const resumeDetails = {
    lastUpdated: "March 10, 2025",
    fileSize: "1.2 MB",
    fileType: "PDF",
    pages: numPages || "Loading...",
  };

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    setIsLoading(false);
    setError("Failed to load the resume. Please try again later.");
    console.error("PDF load error:", error);
  }, []);

  const changePage = useCallback(
    (offset) => {
      setPageNumber((prevPageNumber) => {
        const newPageNumber = prevPageNumber + offset;
        return newPageNumber > 0 && newPageNumber <= numPages
          ? newPageNumber
          : prevPageNumber;
      });
    },
    [numPages]
  );

  const getSimpleScale = useCallback(() => {
    if (width > 1200) return 1.2;
    if (width > 992) return 1.0;
    if (width > 768) return 0.8;
    if (width > 576) return 0.6;
    return 0.5;
  }, [width]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    const handleKeyDown = (event) => {
      if (isEnhancedView) {
        if (event.key === "ArrowRight") changePage(1);
        else if (event.key === "ArrowLeft") changePage(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEnhancedView, changePage]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Munvar Khajavali Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));
  const resetZoom = () => setScale(1.2);

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const pdfOptions = useMemo(
    () =>
      isEnhancedView
        ? {
            cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/cmaps/`,
            cMapPacked: true,
            standardFontDataUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/standard_fonts/`,
          }
        : {},
    [isEnhancedView]
  );

  return (
    <ResumeContainer>
      <Animate animation={slideInDown}>
        <ResumeHeader>
          <ResumeTitle>My Professional Resume</ResumeTitle>
          <ResumeActions>
            <ViewToggle>
              <Slider active={isEnhancedView} />
              <ToggleButton
                active={!isEnhancedView}
                onClick={() => setEnhancedView(false)}
              >
                Simple
              </ToggleButton>
              <ToggleButton
                active={isEnhancedView}
                onClick={() => setEnhancedView(true)}
              >
                Enhanced
              </ToggleButton>
            </ViewToggle>
            <ActionButton onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} /> Download
            </ActionButton>
          </ResumeActions>
        </ResumeHeader>
      </Animate>

      {isEnhancedView && (
        <Animate animation={fadeIn}>
          <ResumeInfo>
            <ResumeDescription>
              This resume outlines my professional experience, skills, and
              education. It highlights my expertise in frontend development,
              UI/UX design, and project management experience across various
              industries.
            </ResumeDescription>
            <ResumeMeta>
              {Object.entries(resumeDetails).map(([key, value]) => (
                <ResumeDetails key={key}>
                  <strong>
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </strong>{" "}
                  {value}
                </ResumeDetails>
              ))}
            </ResumeMeta>
          </ResumeInfo>

          <ViewerControls>
            <ZoomControls>
              <ActionButton small onClick={zoomOut} title="Zoom Out">
                <FontAwesomeIcon icon={faSearchMinus} />
              </ActionButton>
              <span>{Math.round(scale * 100)}%</span>
              <ActionButton small onClick={zoomIn} title="Zoom In">
                <FontAwesomeIcon icon={faSearchPlus} />
              </ActionButton>
              <ActionButton small onClick={resetZoom} title="Reset Zoom">
                <FontAwesomeIcon icon={faRedo} />
              </ActionButton>
            </ZoomControls>
          </ViewerControls>
        </Animate>
      )}

      <Animate animation={fadeIn}>
        <PdfContainer>
          {isLoading && (
            <PageLoader>
              <FontAwesomeIcon icon={faSpinner} />
              <p>Loading Resume...</p>
            </PageLoader>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Document
            file={resumePath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<span></span>}
            options={pdfOptions}
          >
            <Page
              pageNumber={pageNumber}
              scale={isEnhancedView ? scale : getSimpleScale()}
              renderTextLayer={false}
              onItemClick={isEnhancedView ? () => {} : undefined}
            />
          </Document>

          {numPages && numPages > 1 && (
            <PageControls>
              <PageNavButton onClick={previousPage} disabled={pageNumber <= 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </PageNavButton>
              <PageNumber>
                {pageNumber} / {numPages}
              </PageNumber>
              <PageNavButton
                onClick={nextPage}
                disabled={pageNumber >= numPages}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </PageNavButton>
            </PageControls>
          )}
        </PdfContainer>
      </Animate>
    </ResumeContainer>
  );
};

export default Resume;
