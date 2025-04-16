import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import useFetch from '../useFetch';

// === Pages

    function ProjectView() {    

        const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects?pLevel`)

        let project = null;

        if (data) {
            project = data.data[0]
            console.log(project)

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
                        <div className="square"></div>
                        <div className="hr-line"></div>
                    </div>
                </div>
            );
        }
       
    }
    
    export default ProjectView;