import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';
import Widget from '../components/Widget';

// === Pages

    function ProjectView() {    

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects?pLevel`)

        let project = null;
        let display = [];
        let sections = null;

        if (data) {
            project = data.data[0]
            sections = data.data[0].Project_Media;

            console.log(project)

            for (let i = 0; i < sections.length; i ++) {
                if (sections[i].__component === "media.dgs-widget") {
                    display.push(<Widget data={sections[i]} />)
                } else if (sections[i].__component === "project-components.text") {
                    // display.push(<Text data={sections[i]} />)
                } else if (sections[i].__component === "project-components.video") {
                    // display.push(<Video data={sections[i]} />)
                } else if (sections[i].__component === "project-components.gallery") {
                    // display.push(<Gallery data={sections[i]} />)
                } 
            }

            return (
                <div>
                    <img className="feature-image" src={ `${process.env.REACT_APP_BACKEND}${project.Feature_Image.url}`} />
                    <div className="page-container flex r-gap-20 column">
                        <div className="flex">
                            <label class="switch">
                                <input type="checkbox"/>
                                <span className="slider-dgs round"></span>
                            </label>
                            <p className="dgs-label">DGS</p>
                        </div>
                        <div className="hr-line"></div>
                        <div className="project-header">
                            <h1 className="width-75">{ project.Project_Title }</h1>
                            <h3>{ project.Premiere_Year }</h3>
                        </div>
                        <div className="hr-line"></div>
                        <div className="text-wrapper">
                            <BlocksRenderer content={ project.Project_Description } />
                        </div>
                        <div className="flex">
                            <div className="width-50 ochre">
                                <h2>Credits</h2>
                                <div className="padding-10 ochre-border-left">
                                    {project.Credit.map((entry) => 
                                        <div className="grid credits">
                                            <p><b> {entry.Credit} </b></p>
                                            <BlocksRenderer content={ entry.Creditee } />
                                        </div>
                                    )}
                                </div>
                                </div>
                            <div className="width-50 ochre">
                                <h2>Funding</h2>
                                <div className="padding-10 ochre-border-left">
                                    <BlocksRenderer content={ project.Funding } />
                                </div>
                            </div>
                        </div>
                        <div>
                            {display.map((section, index) => 
                                <div key={ index }>
                                    { section }
                                </div>
                            )}
                        </div>
                        <div className="square"></div>
                        <div className="hr-line"></div>
                    </div>
                </div>
            );
        }
       
    }
    
    export default ProjectView;