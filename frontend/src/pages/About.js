import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';

// === Pages

    function About() {    

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page?pLevel`)

        let about = null;

        if (data) {

            about = data.data
            console.log(about)

            return (
                <div>
                    <img className="feature-image" src={ `${process.env.REACT_APP_BACKEND}${about.Feature_Image.url}`} />
                    <div className="page-container flex r-gap-20 column">
                        <div className="hr-line"></div>
                        <h1>About</h1>
                        <div className="hr-line"></div>
                        <div className="text-wrapper">
                            <BlocksRenderer content={ about.Biography } />
                        </div>
                        <div className="square"></div>
                        <div className="hr-line"></div>
                    </div>
                </div>
            );
        }
       
    }
    
    export default About;