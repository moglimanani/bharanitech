import { TrainingType } from '../../types/trainings';
import { StyledpriceCol, StyledpriceRow } from './styles';

interface LatestTrainingPropsType {
  trainings: TrainingType[]
}

const LatestTraining = ({ trainings }: LatestTrainingPropsType) => {
  if (!trainings || trainings.length <= 0) {
    return <></>
  }

  const Blocks = () => trainings.map((item: TrainingType, id: number) =>{
    const isLocation = item.city && item.state && item.country
    return (
      <StyledpriceCol key={`trainingBlocks=${id}`}>
        <p>{item.title}</p>
        <h3>₹{item.total_price ?? '0.00'}</h3>
        <ul>
          <li>Start Date: {item.startdate}</li>
          
            {
              +item.classification !== 0 && (
                <li>Location: Online</li>
              )
            }
            {
              +item.classification === 0 && isLocation && (
                <li>Location:  {item.city}, {item.state}, {item.country}</li>
              )
            }
  
          
          <li>{item.description ? item.description : '-'}</li>
        </ul>
        <button>Apply</button>
      </StyledpriceCol>
    )

  })


return (
  <>
    <StyledpriceRow>
      <Blocks />
    </StyledpriceRow>
  </>
);
}

export default LatestTraining;