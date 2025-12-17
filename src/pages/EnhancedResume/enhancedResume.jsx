import React, { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSpinner,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  ResumeContainer,
  ResumeHeader,
  ResumeTitle,
  ResumeActions,
  ActionButton,
  PdfContainer,
  PageControls,
  PageNavButton,
  PageNumber,
  PageLoader,
  ErrorMessage,
  BackButton,
  ResumeInfo,
  ResumeDescription,
  ResumeMeta,
  ViewerControls,
  ZoomControls,
  ResumeDetails,
} from "./enhancedResumeStyles";
import resumePath from "../../assets/resume.pdf";

// Import CSS for annotation layer
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const EnhancedResume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.2);

  const resumeDetails = {
    lastUpdated: "March 10, 2025",
    fileSize: "1.2 MB",
    fileType: "PDF",
    pages: numPages || "Loading...",
  };

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        changePage(1);
      } else if (event.key === "ArrowLeft") {
        changePage(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changePage]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setIsLoading(false);
    setError("Failed to load the resume. Please try again later.");
    console.error("PDF load error:", error);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

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

  const handleItemClick = (item) => {
    console.log("Clicked annotation:", item);
    if (item.uri) {
      window.open(item.uri, "_blank", "noopener,noreferrer");
      return false;
    }
    return true;
  };

  return (
    <ResumeContainer>
      <BackButton to="/about">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to About
      </BackButton>

      <ResumeHeader>
        <ResumeTitle>My Professional Resume</ResumeTitle>
        <ResumeActions>
          <ActionButton onClick={handleDownload}>
            <FontAwesomeIcon icon={faDownload} /> Download
          </ActionButton>
        </ResumeActions>
      </ResumeHeader>

      <ResumeInfo>
        <ResumeDescription>
          This resume outlines my professional experience, skills, and
          education. It highlights my expertise in frontend development, UI/UX
          design, and project management experience across various industries.
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
            -
          </ActionButton>
          <span>{Math.round(scale * 100)}%</span>
          <ActionButton small onClick={zoomIn} title="Zoom In">
            +
          </ActionButton>
          <ActionButton small onClick={resetZoom} title="Reset Zoom">
            Reset
          </ActionButton>
        </ZoomControls>
      </ViewerControls>

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
          options={{
            cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/cmaps/`,
            cMapPacked: true,
            annotationMode: "enable",
            externalLinkTarget: "_blank",
            enableScripting: true,
            isEvalSupported: true,
            standardFontDataUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/standard_fonts/`,
          }}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={true}
            scale={scale}
            onItemClick={handleItemClick}
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

            <PageNavButton onClick={nextPage} disabled={pageNumber >= numPages}>
              <FontAwesomeIcon icon={faChevronRight} />
            </PageNavButton>
          </PageControls>
        )}
      </PdfContainer>
    </ResumeContainer>
  );
};

export default EnhancedResume;
