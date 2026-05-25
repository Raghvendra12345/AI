'use client'

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function PDFDownload() {

  const downloadPDF = async () => {

    const input = document.getElementById('paper')

    if (!input) return

    const canvas = await html2canvas(input)

    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')

    const pdfWidth = pdf.internal.pageSize.getWidth()

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(
      imgData,
      'PNG',
      0,
      0,
      pdfWidth,
      pdfHeight
    )

    pdf.save('question-paper.pdf')
  }

  return (
    <button
      onClick={downloadPDF}
      className="bg-black text-white px-5 py-3 rounded-xl"
    >
      Download PDF
    </button>
  )
}