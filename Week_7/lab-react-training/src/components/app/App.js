import React from 'react';
import IdCard from '../idcard/IdCard';
import Greetings from '../greetings/Greetings';
import Random from '../random/Random';
import BoxColor from '../boxcolor/BoxColor';
import CreditCard from '../creditcard/CreditCard';
import Rating from '../rating/Rating';
import DriverCard from '../drivercard/DriverCard';
import LikeButton from '../likebutton/LikeButton';
import ClickablePicture from '../clickablepicture/ClickablePicture';
import Dice from '../dice/Dice';
import Carousel from '../carousel/Carousel';
import NumbersTable from '../numberstable/NumbersTable';
import FaceBook from '../facebook/FaceBook';
import SignupPage from '../signuppage/SignupPage';
import RGBColorPicker from '../rgbcolorpicker/RGBColorPicker';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} class="border border-dark w-25 d-flex">
        rgb(255,0,0)
      </BoxColor>
      <BoxColor r={128} g={255} b={0} class="border border-dark w-25">
        rgb(128,255,0)
      </BoxColor>
      <div className="d-flex">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton /> <LikeButton />
      <ClickablePicture
        img={require("../../assets/images/maxence.png")}
        imgClicked={require("../../assets/images/maxence-glasses.png")}
      />
      <Dice />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <NumbersTable limit={12} />
      <FaceBook />
      <SignupPage />
      <RGBColorPicker />
    </div>
  );
}

export default App;
