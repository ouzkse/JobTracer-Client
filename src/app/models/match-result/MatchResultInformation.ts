
export class MatchResultInformation {

  listId: number;
  totalPages: number;
  jobs: Array<MatchResultItem>;

  constructor(listId: number, totalPages: number, jobs: Array<MatchResultItem>) {
    this.listId = listId;
    this.totalPages = totalPages;
    this.jobs = jobs;
  }
}

export class MatchResultItem {
  id: string;
  experience: number;
  maxExperience: number;
  position: string;
  cities: Array<string>;
  educationStatus: number;
  clusters: string;
  text: string;
  htmlText: string;

  constructor(
    id: string,
    experience: number,
    maxExperience: number,
    position: string,
    cities: Array<string>,
    educationStatus: number,
    clusters: string,
    text: string,
    htmlText: string,
  ) {
    this.id = id;
    this.experience = experience;
    this.maxExperience = maxExperience;
    this.position = position;
    this.cities = cities;
    this.educationStatus = educationStatus;
    this.clusters = clusters;
    this.text = text;
    this.htmlText = htmlText;
  }

  getCitiesStr(): string {
    return this.cities.toString();
  }
}

export function getMatchResultList(): MatchResultInformation {
  return new MatchResultInformation(3308, 13, [
    new MatchResultItem('1', 0, 99, 'Kasiyer', ['Ankara', 'Edirne'], 5, '', '', '<p><strong>ÇALIŞMA KONULARI :</strong></p><ul><li>Bilgisayar grafiği,</li><li>Bilgisayarlı geometri,</li><li>Linux kullanıcı arayüz programlama,</li><li>Paralel hesaplama</li></ul><p>&nbsp;<em> Not: Çalışmalarımız web ve grafik tasarım konularını içermemektedir.</em></p><br><p><strong>ARANAN NİTELİKLER :</strong></p><p><em><strong><u>Teknik</u>:</strong></em></p><p><em><strong>Gerekli:<br></strong></em></p><ul><li>İyi seviyede C, C++ <br></li><li>İyi derecede İngilizce</li></ul><br><p><em><strong>Tercih:</strong></em><br></p><ul><li>3D grafik programlama,</li><li>Linux işletim sistemi ve geliştirme ortamları,</li><li>Bilgisayarlı geometri,</li><li>Fortran,</li><li>Paralel ve bilimsel hesaplama</li></ul><p><br></p><p><em><strong><u>Kişisel</u>:</strong></em></p><ul><li>Grup çalışmasına yatkınlık,</li><li>(Tercihen) askerlikle ilişiksiz.</li></ul><br><p><strong>ÜCRET:</strong></p><p>Özellikle tecrübe ve askerlik durumlarına bağlı olarak, yüksek ve tatminkar ücretler teklif edilecektir.</p><br>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>'),
    new MatchResultItem('2', 0, 99, 'Kasiyer', ['İstanbul'], 5, '', '', '<br><ul><li>Bilgisayar Mühendisliği ya da benzer bölümlerden mezun</li><li>İyi derecede Javascript bilen</li><li>Tercihen React Native gibi cross-platform mobil uygulama geliştirme teknolojileri tecrübesine sahip</li><li>Tercihen yapay zeka konusunda tecrübeli olmak</li><li>Tercihen Ruby on Rails tecrübesine sahip olan</li><li>Json, Jquery, HTML, XHTML, CSS, XML, JavaScript, AJAX konularında deneyim sahibi</li><li>Güvenli ve test kontrollü kod geliştirme bilgisi olan</li><li>Sorun çözme odaklı ve müşteri odaklı yaklaşım sahibi</li><li>Takım çalışmasına uyumlu</li><li>Değişime, yeni teknolojilere ve gelişmeye açık adaylar</li><li>Erkek adaylar için askerlik hizmetini tamamlamış veya en az 2 yıl tecilli olmak</li><li></li></ul>')
  ]);
}

