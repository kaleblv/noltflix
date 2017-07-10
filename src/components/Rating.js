import React from 'react';
import iconStarEmpty from '../images/icon-star-empty.svg';
import iconStarfull from '../images/icon-star-full.svg';



class Rating extends React.Component {

  constructor() {
    super();
  }


  componentDidMount() {
    const rating = this.props.rating;
    const ratingItems = Array.from(document.getElementsByClassName('rating__item'));


    for (var i = 0; i < rating; i++) {
      //Do something
      console.log('rating', rating)

      console.log(ratingItems[i])
      ratingItems[i].setAttribute("src", iconStarfull);
    }
  }

  render() {

    return(
      <span className="rating">
        <img src={iconStarEmpty} className="rating__item" alt=""/>
        <img src={iconStarEmpty} className="rating__item" alt=""/>
        <img src={iconStarEmpty} className="rating__item" alt=""/>
        <img src={iconStarEmpty} className="rating__item" alt=""/>
        <img src={iconStarEmpty} className="rating__item" alt=""/>
      </span>
    )
  }
}

export default Rating;
