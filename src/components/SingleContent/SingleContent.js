import { Star } from '@mui/icons-material'
import React from 'react'
import { img_300, unavailable } from '../../config/config'
import ContentModal from '../Modal/ContentModal'
import './SingleContent.css'

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <img className="poster" src={poster ? `${img_300}${poster}` : unavailable} alt="title" />
      <p className="title">{title}</p>
      <div className="rating">
        <span className='rating-text'>Rating :</span>
        <Star className='rating-icon' style={{ color: "yellow", fontSize: "20px"}} />
        <span className='rating-vote'>{vote_average.toFixed(1)}</span>
      </div>
      <span className="subTitle">
        {media_type === "tv" ? "Tv Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  )
}

export default SingleContent