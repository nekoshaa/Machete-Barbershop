import React from 'react'
import styles from './HomePage.module.css'
import Slides from '../Carousel/Slides'
import Navbar from '../Navbar/Navbar'
import photo1 from '../../media/1.png'
import photo2 from '../../media/2.png'
import photo3 from '../../media/3.png'
import photo4 from '../../media/4.png'
import photo5 from '../../media/5.png'
import icon1 from '../../Icons/1.png'
import icon2 from '../../Icons/2.png'
import icon3 from '../../Icons/3.png'
import icon4 from '../../Icons/4.png'
import icon5 from '../../Icons/5.png'
import icon6 from '../../Icons/6.png'
const HomePage = () => {
    return (
        <>
            <div className={styles.background}>

                <div className={styles.HeadNavBar}>
                    <Navbar />
                </div>


                <b><p className={styles.logoMain}>MACHETE<br /> BARBERSHOP</p></b>

                <div className={styles.mainBtn}>

                    <a href="#prise">  <button className={styles.miniBtn}>Прайс лист</button></a>
                    <button className={styles.miniBtn}>Записаться</button>

                </div>

            </div>

            <div className={styles.section2} id="about">

                <div className={styles.mainDescription}>

                    <div className={styles.description}>

                        <p className={styles.title3}>“ Это приятное атмосферное место для мужчин, где каждый сможет почувствовать себя как в гостях у друга и расслабиться. Для наших клиентов стрижка - это не пустая трата времени, а уютное времяпровождение. ”</p>
                        <h1 className={styles.title2}>MACHETE <br /> BARBERSHOP <br /> <br />  </h1>
                    </div>



                </div>



            </div>




            <div className={styles.section3}>
                {/* <h1 className={styles.section3Title}>У НАС ЕСТЬ</h1> */}

                <div className={styles.section3RowFirst}>

                    <div className={styles.section3Row1}>
                        <h5>Профессиональная команда мастеров</h5>
                    </div>

                    <div className={styles.section3Row2}>
                        <h5>Мужские и детские стрижки</h5>
                    </div>

                    <div className={styles.section3Row3}>
                        <h5>Мытье и укладка</h5>
                    </div>

                </div>




                <div className={styles.section3RowSecond}>


                    <div className={styles.section3Row4}>
                        <h5>Оформление бороды и усов</h5>
                    </div>

                    <div className={styles.section3Row5}>
                        <h5>Традиционное влажное бритье</h5>
                    </div>

                    <div className={styles.section3Row6}>
                        <h5>Качественные средства для ухода</h5>
                    </div>

                </div>






            </div>





            <div className={styles.section4} id="prise">

            </div>



            <Slides />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.697058389!2d73.07758739576197!3d49.81056277377401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424346d7b6f14d91%3A0xeb5dc8badbb37bdd!2z0YPQuy4g0JLQvtC40L3QvtCyLdC40L3RgtC10YDQvdCw0YbQuNC-0L3QsNC70LjRgdGC0L7QsiAxOCwg0JrQsNGA0LDQs9Cw0L3QtNCwIDEwMDAwMA!5e0!3m2!1sru!2skz!4v1637935930900!5m2!1sru!2skz" width="100%" height="800" allowfullscreen="" loading="lazy" id="contacts" style={{ userSelect: 'none' }}></iframe>

            <div className={styles.instagram}>

                <h1 className={styles.footerTxt}>Наши работы в <a target='_blank' href="//www.instagram.com/machete_barbershop/"><ins>Instagram</ins></a> </h1>

                <div className={styles.photos}>

                    <img src={photo1} width='300px' height='' alt="" />
                    <img src={photo2} width='300px' height='' alt="" />
                    <img src={photo3} width='300px' height='' alt="" />
                    <img src={photo4} width='300px' height='' alt="" />
                    <img src={photo5} width='300px' height='' alt="" />

                </div>

            </div>


            <div className={styles.footer}>

                <h3 className={styles.titleMini}>Machete Barbershop</h3>
                <div className={styles.adress}>
                    <p>Адрес:</p>
                    <p>Воинов-Интернационалистов,18</p>
                    <p>Шахтеров 36/2</p>
                </div>





            </div>


        </>
    )
}
export default HomePage;



























/*                     <h5 style={{ paddingLeft: "100px" }}>Стрижка мужская <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Стрижка детская <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Стрижка бороды <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Королевское бритье <hr align='center' style={{ width: "200px", marginLeft: "270px" }} /> <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Классическое бритье <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5 >
<h5 style={{ paddingLeft: "100px" }}>Стрижка машинкой <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5 >
</div >
<h5 style={{ paddingLeft: "100px" }}>Комплексные услуги</h5>
<div className={styles.prising2}><p style={{ paddingLeft: "480px" }}>
</p>                   <h5 style={{ paddingLeft: "100px" }}>Отец + сын <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Друг + друг <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5>
<h5 style={{ paddingLeft: "100px" }}>Стрижка + борода <hr align='center' style={{ width: "200px", marginLeft: "270px" }} />  <p style={{ paddingBottom: "40px", paddingLeft: "480px", fontFamily: "initial" }}>  5000тг</p></h5 > */