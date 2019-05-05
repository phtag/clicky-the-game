import React from 'react';
import Wrapper from "./components/Wrapper";
import Overview from "./components/Overview";
import Navbar from "./components/Navbar";
import ImagesCard from "./components/ImagesCard";
import './App.css';
import images from "./images.json";

class App extends React.Component {
    state = {
      myImages: images,
      score: 0,
      topScore: 0,
      selected: []
    };
    componentDidMount () {
      // Initialize selected states for each image
      this.state.myImages.forEach(element => {
        this.state.selected.push(false);
      });
      // alert("Did mount. length" +  this.state.myImages.length);
    }
  
    handleImageClickEvent = id => {
      let selected = [...this.state.selected];
      let images = [...this.state.myImages];
      let score = this.state.score;
      let index = Number(id);

      // alert("Image click for id=" + id + " selected now=" + selected[index]);
      if (!selected[index]) {
        score++;
      }
      selected[index] = true;

      this.setState({selected});
      this.setState({score});
      this.setState({
          myImages: images.sort(() => Math.random() - 0.5),
          // totalClick: this.state.totalClick + 1
        });
    };

render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}></Navbar>
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