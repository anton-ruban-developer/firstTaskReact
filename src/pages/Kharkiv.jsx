import s from "../styles/Kharkiv.module.css";
import photo1 from "../assets/img/Derzhprom_building.jpg";
import photo2 from "../assets/img/Kharkiv_University.jpg";
import photo3 from "../assets/img/Успенський_собор.jpg";

const Kharkiv = () => {
  return (
    <div>
      <h1 className={s.city}>Kharkiv, Ukraine</h1>
      <p className={s.description}>
        Kharkiv is a city in Ukraine. It is located in the north-east of Ukraine
        , Slobozhan Oblast , the scientific center of Ukraine, the
        administrative center of the Kharkiv region . It is the second most
        populous city in Ukraine with a population of 1,421,125. The area of
        the city is 350 km². Together with the adjacent cities and districts
        it formsKharkiv agglomeration with a population of over 2 million
        people. Hero city of Ukraine. A large scientific, cultural, industrial
        and transport center of Ukraine, it was the third industrial center in
        the former USSR . 60 research institutes , 41 higher educational
        institutions, including V.N. Karazin KhNU , which is among the best 500
        universities in the world and KhPI National Technical University , which
        is among the best 1000, 8 museums , city art gallery , 7 state theaters
        and several dozen non-state theaters, 80 libraries . Has a full set of
        awards of the Council of Europe : European Diploma, Honorary Flag,
        Honorary Distinction and Prize of Europe.
      </p>
      <div className={s.photo}>
        <img src={photo1} alt="Фото 1" />
        <img src={photo2} alt="Фото 2" />
        <img src={photo3} alt="Фото 3" />
      </div>
    </div>
  );
};

export default Kharkiv;
