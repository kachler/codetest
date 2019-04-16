import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Digital } from 'react-activity';
import AppBar from './components/AppBar';
import CardView from './components/CardView';
import PrevButton from './buttons/PrevButton';
import AddButton from './buttons/AddButton';
import NextButton from './buttons/NextButton';
import NewCard from './components/NewCard';
require('react-activity/dist/react-activity.css');
require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentIndex: 0,
      currentCard: {
        url: '',
        title: '',
        desc: '',
        fact: '',
      },
      newCard: {
        url: '',
        title: '',
        desc: '',
        fact: '',
      },
      showModal: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getAllCards();
  }

  getAllCards = () => {
    this.setState((state) => { state.isLoading = true; });
    fetch(process.env.API_URL)
      .then(response => response.json())
      .then((data) => { 
        this.setState({ 
          cards: [...data],
          currentCard: {
            url: data[0].mfc_photo_url,
            title: data[0].mfc_title,
            desc: data[0].mfc_desc,
            fact: data[0].mfc_factoid,
          },
          isLoading: false,
        });
      })
      .catch(error => console.log(error))
  }

  previousCard = () => {
    const { currentIndex, cards } = this.state;
    let nextIndex = currentIndex;
    if (this.state.currentIndex > 0) {
      nextIndex -= 1;
    }
    this.setState({
      currentCard: {
        url: cards[nextIndex].mfc_photo_url,
        title: cards[nextIndex].mfc_title,
        desc: cards[nextIndex].mfc_desc,
        fact: cards[nextIndex].mfc_factoid,
      },
      currentIndex: nextIndex,
    });
  }

  addCard = () => {
    this.setState({
      showModal: true,
    });
  }

  nextCard = () => {
    const { currentIndex, cards } = this.state;
    let nextIndex = currentIndex;
    if (this.state.currentIndex < cards.length - 1) {
      nextIndex += 1;
    }
    this.setState({
      currentCard: {
        url: cards[nextIndex].mfc_photo_url,
        title: cards[nextIndex].mfc_title,
        desc: cards[nextIndex].mfc_desc,
        fact: cards[nextIndex].mfc_factoid,
      },
      currentIndex: nextIndex,
    });
  }

  lastCard = () => {
    const { currentIndex, cards } = this.state;
    let lastIndex = cards.length - 1;
    this.setState({
      currentCard: {
        url: cards[lastIndex].mfc_photo_url,
        title: cards[lastIndex].mfc_title,
        desc: cards[lastIndex].mfc_desc,
        fact: cards[lastIndex].mfc_factoid,
      },
      currentIndex: lastIndex,
    });
  }

  inputChange = (event) => {
    this.setState({
      newCard: {
        url: this.state.newCard.url,
        title: this.state.newCard.title,
        desc: this.state.newCard.desc,
        fact: this.state.newCard.fact,
        [event.target.id]: event.target.value,
      }
    });
  }

  cancelModal = () => {
    this.setState({
      showModal: false,
      newCard: {
        url: '',
        title: '',
        desc: '',
        fact: '',
      },
    });
  }

  submitCard = () => {
    const { newCard, cards } = this.state;
    const data = {
      mfc_title: newCard.title,
      mfc_photo_url: newCard.url,
      mfc_desc: newCard.desc,
      mfc_factoid: newCard.fact,
    };
    fetch(process.env.API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => { this.setState({ cards: cards.concat([data]) }) })
      .then(() => { this.lastCard(); })
      .then(() => { this.cancelModal(); })
      .catch(error => console.error('Error:', error));
  }

  showWidget = () => {
    cloudinary.openUploadWidget({
      cloudName: process.env.CLOUDINARY_CLOUDNAME, uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET}, (error, result) => {
        if (result && result.event === "success") {
          this.setState({
            newCard: {
              url: result.info.secure_url,
              title: this.state.newCard.title,
              desc: this.state.newCard.desc,
              fact: this.state.newCard.fact,
            }
          });
        }
    });
  }
 
  render() {
    const { currentCard, newCard, isLoading, showModal, showWidget } = this.state;

    if (isLoading) {
      return (
        <div>
          <header>
            <AppBar addCard={this.addCard} />
          </header>
          <div id="loading">
            <Digital size={30} speed={1} />
          </div>
        </div>
      );
    }

    return (
      <div>
        <header>
          <AppBar addCard={this.addCard} />
        </header>
          <div className="prev-card-next-row">
            <PrevButton className="nav-button" id="prev" previousCard={this.previousCard} />
            <CardView className="cards" currentCard={currentCard} />
            <NextButton className="nav-button" id="next" nextCard={this.nextCard} />
          </div>
          <div className='modal'>
            <Modal visible={showModal} style={{ width: 500, height: 500 }} effect="fadeInUp" onClickAway={() => this.cancelModal()}>
              <NewCard newCard={newCard} inputChange={this.inputChange} cancelModal={this.cancelModal} submitCard={this.submitCard} showWidget={this.showWidget} />
            </Modal>
          </div>
      </div>
    );
  }
}

export default App;
