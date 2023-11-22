import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsPDF from 'jspdf';
import { Pdf } from '../../Context/Skills';


function BioSection() {
    const { pdf } = useContext(Pdf);

    const generatePDF = () => {
        const screenWidth = window.innerWidth - 30;  // 20 pixels of padding on each side
        const screenHeight = window.innerHeight - 30;  // 20 pixels of padding on top and bottom
    
        const report = new JsPDF('landscape', 'pt', [screenWidth, screenHeight]);
        report.html(pdf, {
            callback: () => {
                report.save('cv.pdf');
            }
        });
    }
    
    return (
        <div id='bio' className="row px-5" width="100%" style={{backgroundColor:'white', padding:"100px"}}>
            <h3 className="col-3" style={{fontSize:"60px", textShadow:"2px 2px 8px #ffffff", textAlign:'center'}}>About Me</h3>
            <div className="col-9 d-flex flex-column">
                <p className="mb-5 text-start"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <button className='px-4 py-3 bg-black text-light text-decoration-none align-self-start'
                onClick={generatePDF} type="button"
                >
                    Download Resume
                </button>
            </div>
        </div>
      );
    }


export default BioSection; 

