// import React from 'react';
// import user from '../assets/user.svg';
// import moeda from '../assets/moeda.svg';
// import home from '../assets/home.svg';
// import cards from '../assets/cards.svg';
// import rank from '../assets/rank.svg';
// import medalha from '../assets/medalha.svg';
// import construction from '../assets/construction.png';
import mapa from '../assets/mapa.png';

export default function Main() {
  return (
    <>
      {/* O código abaixo é um protótipo de como a tela principal do aplicativo deve ser.
      <img
        src={construction}
        style={{
          position: 'absolute',
          rotate: '-50deg',
          width: '350px',
          marginRight: '250px',
    
        }}
      />
      <div className='main-main-div'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            justifySelf: 'flex-start',
          }}
        >
          <button
            className='form-button'
            style={{
              marginBottom: '10px',
              backgroundColor: 'green',
              borderRadius: '25px',
              fontSize: '10px',
              width: '150px',
              marginRight: '100px',
            }}
            type="submit"
          // variant="contained"
          >
            <img src={moeda}
              style={{ width: '20px', height: '20px', marginRight: '15px' }}
            />
            XXXX pontos
          </button>
          <img src={user}
            style={{ width: '60px', height: '60px' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            justifySelf: 'flex-start',
            marginTop: '50px',
            paddingTop: '170px',
            paddingBottom: '170px',

          }}
        >
          Teste
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '70px',
            backgroundColor: 'lightgray',
            padding: '15px',
            borderRadius: '25px',
            
          }}
        >
          <img src={home}
            style={{ width: '30px', height: '30px' }}
          />
          <img src={cards}
            style={{ width: '30px', height: '30px' }}
          />
          <img src={rank}
            style={{ width: '30px', height: '30px' }}
          />
          <img src={medalha}
            style={{ width: '30px', height: '30px' }}
          />
        </div>
      </div> */}
    <img
      src={mapa}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1',
      
      }}
    >
    </img>
    </>

  );
}
