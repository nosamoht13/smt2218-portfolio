import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import resume from "../assets/Resume.pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;


function Resume() {
  const containerRef = useRef(null);

  useEffect(() => {
  const container = containerRef.current;
  const url = resume;
  if (container.dataset.rendered) return;
  container.dataset.rendered = "true";

  container.innerHTML = "";

  const loadPDF = async () => {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const scale =
        window.innerWidth < 600 ? 1.0 : window.innerWidth < 900 ? 1.4 : 1.7;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      canvas.style.display = "block";
      canvas.style.margin = "0 auto 24px";
      canvas.style.maxWidth = "95vw";
      canvas.style.height = "auto";

      container.appendChild(canvas);
      await page.render({ canvasContext: context, viewport }).promise;
    }
  };

  loadPDF();
}, []);


  return (
    <div className="resume-page">
      <h1 className="page-title">My Resume</h1>
      <div ref={containerRef} id="pdf-viewer" className="resume-viewer"></div>
    </div>
  );
}

export default Resume;
