# spring_boot_react.js
Merhaba ben Berk,

Hazırladığım demo uygulamayı docker-compose üzerinden tek seferde çalıştırmayı ne yazık ki başaramadım. Bu sebepten dolayı kullanıma uygulamanın çalıştırılmasını da ekleyeceğim.

Uygulamamda arka yüz için Java Spring Boot, ön yüz için JavaScript Reactjs ve veri tabanı olarak Redis (Docker üzerinden.) kullandım. Web uygulaması 3000 protunda çalışmaktadır.

1. Uygulamayı GitHub profilimden clone'layınız.
2. Terminalde "/app" konumuna geldikten sonra "docker-compose up" komutu ile Redis'i kurup çalışır hale getirmiş olacaksınız. (Docker uygulaması açık haldeyken.)
3. Terminalde "/app" konumuna geldikten sonra "./mvnw spring-boot:run --quiet" komutu ile Spring Boot ile oluşturulmuş REST api'yı aktifleştiriniz.
4. Terminalde "/app/src/main/fe_app" konumuna geldikten sonra "npm install" komutu ile gerekli paketleri yükledikten sonra "npm start" komutu ile React.js ile oluşturulmuş web uygulamasını açınız.
5. Web uygulaması açıldığında "kullanıcı girişi" sayfasına yönlendirileceksiniz. Yeni hesap açabilirsiniz, nickname/şifre kombinasyonu ile giriş yapınız.
6. Redis image dosyası github clone ile geldiği için önden oluşturulmuş öğeler ve kullanıcı bilgileri bilgisayarınıza gelmiş olacaktır. "admin/admin" nickname/şifre kombinasyonu ile giriş yaparsanız yönetici girişi yapmış olacaksınız.
7. "Auction List" sayfasından istenilen öğenin "Begin Auction" ile açık arttırmaya girebilirsiniz.
8. Admin olan hesap ile açık arttırma eşyası ekleme, düzenleme ve silme seçeneklerinin bulunduğu "Manage Item Showcase" sayfasına "Home Page" üzerinden erişebilirsiniz.
9. Açık artırmayı "End Auction" butonu ile sadece "ADMIN" rolüne sahip hesaplar sonlandırabilecektir. Bu sonlandırmaya kadar son teklifler listede kalacaktır.
10. Açık artırma admin tarafından sonlandırıldığında son teklif sıfırlanacak ve ürünün fiyatı değişecektir.
11. Hesaptan çıkış yapmak için "Log Out" butonunu kullanabilirsiniz. 


NOT:
Redis image dosyası ile gelen veriler eksik olduğu taktirde "admin/admin" kombinasyonu ile kullanıcı oluşturarak otomatik "ADMIN" rolüne sahip hesabı tekrar oluşturmuş olacaksınız.

