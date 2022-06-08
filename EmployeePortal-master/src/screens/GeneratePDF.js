import jsPDF from 'jspdf';
import paylog from './PayrollScreen';

function pdfGenerate() {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.text(paylog, 10, 10);
    console.log(paylog);
    doc.save("Pay-Slip.pdf");
}

export default pdfGenerate;