import Achievement from '../../Component/Achievement/Achievements';
import './Projects.css'

export default function Projects() {
    return (
        <>
            <div className="project-div">
                <div className="project-sub-div">
                    <div className='achievement-header'>
                        <h2>
                            Projects - Show your skills and works
                        </h2>
                    </div>

                    <div className="project">
                        <Achievement
                            head={'Projects - 1'}
                            content={<> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in possimus, corrupti aperiam incidunt vero magni placeat dolorum recusandae, reprehenderit, repellendus cum natus architecto voluptatum eligendi corporis. Libero, alias saepe?</>}

                            link={"none"}
                            linkName={"View"}
                        />

                        <Achievement
                            head={'Projects - 1'}
                            content={<> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in possimus, corrupti aperiam incidunt vero magni placeat dolorum recusandae, reprehenderit, repellendus cum natus architecto voluptatum eligendi corporis. Libero, alias saepe?</>}

                            link={"none"}
                            linkName={"View"}
                        />

                        <Achievement
                            head={'Projects - 1'}
                            content={<> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in possimus, corrupti aperiam incidunt vero magni placeat dolorum recusandae, reprehenderit, repellendus cum natus architecto voluptatum eligendi corporis. Libero, alias saepe?</>}

                            link={"none"}
                            linkName={"View"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}