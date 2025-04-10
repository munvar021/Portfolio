import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faSpinner,
  faChevronLeft,
  faChevronRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContentWrapper,
  ResumeContainer,
  ResumeHeader,
  ResumeTitle,
  ResumeActions,
  DownloadButton,
  PdfContainer,
  PageControls,
  PageNavButton,
  PageNumber,
  PageLoader,
  ErrorMessage,
} from "./resumeStyles";
import resumePath from "../../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber > 0 && newPageNumber <= numPages
        ? newPageNumber
        : prevPageNumber;
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const getScale = () => {
    if (width > 1200) return 1.2;
    if (width > 992) return 1.0;
    if (width > 768) return 0.8;
    if (width > 576) return 0.6;
    return 0.5;
  };

  return (
    <ContentWrapper>
      <ResumeContainer>
        <ResumeHeader>
          <ResumeTitle>My Professional Resume</ResumeTitle>
          <ResumeActions>
            <DownloadButton
              as="a"
              href={resumePath}
              target="_blank"
              download="Munvar Khajavali Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </DownloadButton>
            <DownloadButton as={Link} to="/resume/enhanced">
              <FontAwesomeIcon icon={faEye} /> Enhanced View
            </DownloadButton>
          </ResumeActions>
        </ResumeHeader>

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
          >
            <Page
              pageNumber={pageNumber}
              scale={getScale()}
              renderTextLayer={false}
              renderAnnotationLayer={true}
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
      </ResumeContainer>
    </ContentWrapper>
  );
};

export default Resume;
