import { formatDate } from 'date-fns';
import { TrainingType } from '../../types/trainings';
import { LearnButtonStyled, LeftRightBlock, StyledpriceCol, StyledpriceRow } from './styles';
import { useNavigate } from 'react-router';
import TableRowsIcon from '@mui/icons-material/TableRows';
import InfoIcon from '@mui/icons-material/Info';
interface LatestTrainingPropsType {
  trainings: TrainingType[]
}

const LatestTraining = ({ trainings }: LatestTrainingPropsType) => {
  const navigate = useNavigate()

  if (!trainings || trainings.length <= 0) {
    return <></>
  }

  const Blocks = () => trainings.map((item: TrainingType, id: number) => {
    const isLocation = item.city && item.state && item.country
    return (
      <StyledpriceCol key={`trainingBlocks=${id}`}>
        <p>{item.title}</p>
        <h3>₹{item.total_price ?? '0.00'}/-</h3>
        <ul>
          <li>
            <LeftRightBlock>
              <div> Start Date</div>
              <div>{formatDate(new Date(item.startdate), "dd MMM yyyy")}</div>
            </LeftRightBlock>

          </li>

          {
            +item.classification !== 0 && (
              <li>
                <LeftRightBlock>
                  <div>Location</div>
                  <div>Online</div>
                </LeftRightBlock>
              </li>
            )
          }
          {
            +item.classification === 0 && isLocation && (
              <li>
                <LeftRightBlock>
                  <div>Location</div>
                  <div>{item.city}, {item.state}, {item.country}</div>
                </LeftRightBlock>
              </li>
            )
          }


          <li>
            {/* {item.description ? item.description : '-'} */}
          </li>
        </ul>

        <LearnButtonStyled variant='contained' startIcon={<InfoIcon />} onClick={() =>
          navigate(`${import.meta.env.VITE_ROUTE_TRAININGS_URL}/${item.id}`)}>
          More Details
        </LearnButtonStyled>
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