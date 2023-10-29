import React from "react";
import BgAbout from "../assets/bgAbout.jpeg";
import '../styles/about.css'
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BgAbout})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Keban Et 1976 yılında Keban Kasap olarak kuruldu. Butik bir kasap
          olmasına rağmen müşterilerine sunmuş olduğu ürünlerin katkısız ve
          lezzetli olmasından dolayı kısa sürede 'Et Ustası' ünvanının aldı. 41
          yıldır iş hacmi, ürün yelpazesi, müşteriler, çalışanlar kısacası bir
          çok şey değişti. Ancak değişmeyen tek şey Keban Et'in sunduğu et ve et
          ürünlerinin lezzeti idi. Keban Kasap müşterilerinden aldığı talepler
          ile kalitesini hiç bozmadan büyüyebilen nadir et üreticilerindendir.
          İlerleyen yıllarda gücünü müşterilerinin sadakat ve övgülerinden
          alarak üretim bandını genişletti. İstanbul'un en köklü kasapları
          arasında yer alan Keban Kasap şu anda üretimine 1500m2 kapalı alana
          sahip Keban Et Entegre tesislerinde devam etmekte. Yakın zamana kadar
          sadece pişirmeye hazır et ürünleri üretmesine rağmen 'Et Ustası'
          ünvanına yakışır bir şekilde tüketime hazır, pişirilmiş et ürünleri
          üretmeye başladı. Halkımızın gerçek et, katkısız lezzeti tatması için
          Et Yiyelim markasını oluşturdu. Bu marka çok kısa sürede halkın
          beğenisini kazandı. Et Yiyelim lokantalarında, kendine has lezzetleri
          içerisinde barındıran ürünleri ile müşterilerin vazgeçilmezi arasında
          yer aldı. Keban Et her zaman samimi aile kasabı çizgisinin yanında,
          modern gelişimlere de önem veren bir firma olmuştur. Bu kimliğiyle
          2016 yılında yerli burger projesi ile Burger Yiyelim markasını
          oluşturdu. Burger Yiyelim'in farkı %100 katkısız %100 dana etinden
          yapılan burgerleri oldu.
        </p>
      </div>
    </div>
  );
}

export default About;
