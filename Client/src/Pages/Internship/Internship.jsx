import Achievement from '../../Component/Achievement/Achievements';
import './Internship.css';
import './Responsive-Internship.css';

export default function Projects() {
  return (
    <>
      <div className="internship-div">
        <div className="internship-sub-div">
          <div className='Internship-header'>
            <h2>
              Internship
            </h2>
          </div>

          <div className="internship">
            <Achievement
              head={'Internship - 1'}
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
              head={'Internship - 1'}
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