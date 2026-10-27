"use client";

import { Document, Page, pdfjs } from "react-pdf";
import type { DocumentProps } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type PdfViewerProps = Pick<DocumentProps, "onLoadSuccess" | "onLoadError"> & {
  pageNumber: number;
  scale: number;
};

export default function PdfViewer({
  pageNumber,
  scale,
  onLoadSuccess,
  onLoadError,
}: PdfViewerProps) {
  return (
    <Document
      file="/resume.pdf"
      suspense={false}
      onLoadSuccess={onLoadSuccess}
      onLoadError={onLoadError}
      loading={null}
    >
      <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} />
    </Document>
  );
}
