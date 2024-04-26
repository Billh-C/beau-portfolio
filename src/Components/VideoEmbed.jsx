import React from 'react'
import PropTypes from 'prop-types'

const VideoEmbed = ({embedId}) => {
  return (
    <div>
        <iframe width="485" height="273" src={`https://www.youtube.com/embed/${embedId}`} allow="accelerometer" allowFullScreen title="ShowReel"/>
    </div>
  )
}

export default VideoEmbed