import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';

// === Pages

    function Home() {    

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/home-page?pLevel`)

        let home = null;

        if (data) {

            home = data.data
            console.log(home)

            return (
                <div>
                    <img className="feature-image" src={ `${process.env.REACT_APP_BACKEND}${home.Intro_Media.url}`} />
                    <div className="page-container flex r-gap-20 column">
                        <div className="hr-line"></div>
                        <h1>zwoisy mears-clarke</h1>
                        <div className="hr-line"></div>
                         <div className="flex space-between">
                            <div className="width-50">
                                <BlocksRenderer content={ home.Site_Intro } />
                            </div>
                            <div className="flex column jc-flex-end width-40 ochre r-gap-20">
                                <div className="hr-line-ochre"></div>
                                <h2 className="upcoming">Upcoming</h2>
                                <div className="hr-line-ochre"></div>
                                {home.events.map((entry) => 
                                    <div className="flex flex-end">
                                        <p className="txt-align-right padding-right-10"><em className="performance-title">{ entry.Event_Title }</em></p>
                                        <div className="flex column ochre-border-left padding-left-10">
                                            <p>{ entry.Date_Written } | { entry.Time }</p>
                                            <BlocksRenderer content={ entry.Address } />
                                            <div>
                                                {entry.Icons.map((icon) => 
                                                    <img className="accessibility-icon" src={`${process.env.REACT_APP_BACKEND}${icon.Icon.url }`} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="square-ochre"></div>
                        <div className="hr-line"></div>
                    </div>
                </div>
            );
        }
       
    }
    
    export default Home;