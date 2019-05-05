import React from 'react';
import Wrapper from "./components/Wrapper";
import Overview from "./components/Overview";
import Navbar from "./components/Navbar";
import ImagesCard from "./components/ImagesCard";
import './App.css';
import images from "./images.json";

class App extends React.Component {
    // Setting this.state.friends to the friends json array
    state = {
      myImages: images,
      score: 0,
      topScore: 0,
      selected: []
    };
    componentDidMount () {
      this.state.myImages.forEach(element => {
        this.state.selected.push(false);
      });
      alert("Did mount. length" +  this.state.myImages.length);
    }
  
    handleImageClickEvent = id => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      // const friends = this.state.friends.filter(friend => friend.id !== id);
      // // Set this.state.friends equal to the new friends array
      // this.setState({ images });
      let selected = [...this.state.selected];
      let index = Number(id);

      alert("Image click for id=" + id + " selected now=" + selected[index]);
      selected[index] = true;

      this.setState({selected});
    };

render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Overview></Overview>
          {this.state.myImages.map(image => (
            <ImagesCard
              handleImageClickEvent={this.handleImageClickEvent}
              key={image.id}
              id={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
      </Wrapper>
    );
  }
}
  
export default App;