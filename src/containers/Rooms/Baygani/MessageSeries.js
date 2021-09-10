import React from 'react'

import Dialog from '../../../components/Dialog/Dialog'

const MESSAGES = [
  {
    text: 'عه اومدید. خب اینجا قلمروی منه. از اینجا تا ده تا قدم اونورتر توی راهرو. اون عکس هرم بلندای اونجا رو می بینید؟ می دونید مال پسر کیه؟ مال پسر بابای منه ولی الان پامو یه قدم اونورتر نمی تونم بذارم چون اون عجوزه خرف و گربه جلفش تو تالار اصلی می پلکن. کسی چه می دونه شاید آنیبوس باشه که پاشده اومده اینجا دنبال من. برای همین نمی تونم پیکر مطهرمو پیدا کنم.',
    rightButtonText: 'بعدی',
    leftButtonText: 'disabled',
    image: '/characters/moom-divar.png',
  },
  {
    text: 'خب کار شماها خیلی راحت نیست این س.ر کارشو خوب بلده، این اشیا تقلبی که آورده با اصلش مو نمی زنه. تنها کاری که می تونیم بکنیم اینه که من ازشون رد شم ببینم توشون چیه. ولی همینطوری خشک و خالی نمیشه که، یه توتی بیارید اقلا گلوم خشک شد. به ازای هر چند تا توتی که برام بیارید یکی از اینا رو نگاه می کنم ببینم به کارتون میاد یا نه. ',
    rightButtonText: 'بعدی',
    leftButtonText: 'قبلی',
    image: '/characters/moom-happy.png',
  },
  {
    text: 'هرچند که توتا نمی تونن جای آرامشو بگیرن، برام پیکرمو پیدا کنید. رستارنج یه چیزایی درباره سرد و اب می‌گفت. پیرمرد حواس درست و حسابی نداره که احتمالا سرداب‌های توی اتاق‌های موزه رو می‌گه. از اون عجوزه خرف خوشم نمیاد ولی فکر کنم تنها کسیه که می تونه طلسم‌های روی درها رو باز کنه. آماده باشید که بهش پول بدید تا در اتاقا و سرداب‌ها رو براتون باز کنه.',
    rightButtonText: 'بعدی',
    leftButtonText: 'قبلی',
    image: '/characters/moom-chibegamvalla.png',
  },
  {
    text: 'هروقت توت کافی پیدا کردید می‌تونید بیاید تا براتون یکی از این اشیا رو چک کنم ببینم واکسنی توش هست یا نه. اگرم موفق بشید جسد منو پیدا کنید برام معادل ۲۵ تا توت سیاه و ۲۵ تا آبی و ۲۵ تا قرمز می‌ارزه. براتون بقیه این شیئا رم چک می‌کنم',
    rightButtonText: 'بعدی',
    leftButtonText: 'قبلی',
    image: '/characters/moom-happy.png',
  },
]


const Index = () => {
  const [messageNumber, setMessageNumber] = React.useState(0);
  return (
    <>
      <Dialog
        open={messageNumber == 0}
        goBackward={() => { }}
        goForward={() => setMessageNumber(1)}
        {...MESSAGES[0]}
      />
      <Dialog
        open={messageNumber == 1}
        goBackward={() => setMessageNumber(0)}
        goForward={() => setMessageNumber(2)}
        {...MESSAGES[1]}
      />
      <Dialog
        open={messageNumber == 2}
        goBackward={() => setMessageNumber(1)}
        goForward={() => setMessageNumber(3)}
        {...MESSAGES[2]}
      />
      <Dialog
        open={messageNumber == 3}
        goBackward={() => setMessageNumber(2)}
        goForward={() => setMessageNumber(4)}
        {...MESSAGES[3]}
      />
    </>
  );
}

export default Index;