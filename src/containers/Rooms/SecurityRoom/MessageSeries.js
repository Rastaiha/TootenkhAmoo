import React from 'react'

import Dialog from '../../../components/Dialog/Dialog'

const MESSAGES = [
  {
    text: 'عه جدا شما صدای منو شنیدید؟',
    rightButtonText: 'اینجا چه خبره؟',
    leftButtonText: 'disabled',
    image: '/characters/moom-divar.png',
  },
  {
    text: 'من توتنخ‌عاموام، یه روح سرگردون که هر لحظه می‌تونه به جهنم دنیای مردگان برگرده، مگر اینکه بتونه پیکر مطهرشو که یسری از خدا بی‌خبر قایمش کردن پیدا کنه.',
    rightButtonText: 'خب',
    leftButtonText: 'قبلی',
    image: '/characters/moom-happy.png',
  },
  {
    text: 'چند هزارساله که منتظرم شماها پاشید بیاید اینجا و به من کمک کنید خودمو پیدا کنم. رستارنج گفته بود که بالاخره این روز می‌رسه و یسری آدم بدتیپ که موها و ریشاشونو نمی‌تراشن و احترام فرعونم سرشون نمیشه، با ماسک میان اینجا که با هم یه معامله‌ای بکنیم.',
    rightButtonText: 'داره مرموز میشه...',
    leftButtonText: 'قبلی',
    image: '/characters/moom-narahat.png',
  },
  {
    text: 'مثل اینکه وقتی رستارنج سرش گرم کرونایی‌کردن کل قلمرو من بود، یکی اومده و واکسناشو دزدیده و قولشو به یه تاجری تو زوریخ داده و الانم قراره واکسنا با آشیایی که قراره برای تبادل فرهنگی بین موزه‌های دو تا کشور جا به جا می کنن برن زوریخ.',
    rightButtonText: 'دیگه چی؟',
    leftButtonText: 'قبلی',
    image: '/characters/moom-chibegamvalla.png',
  },
  {
    text: 'شماها قراره جلوشو بگیرید، نه؟ خب بیاید تو دم، در بده! من که از دیوارا رد می‌شم ولی شماها باید رمز ۴ رقمی عبورو بزنید. این نگهبان اینجام مثل رستارنج حواس درست و حسابی نداره، هی رمزو یادش می‌ره. برای همین همیشه یه جا می‌نویستش. اگر اینجا رو بگردید احتمالا پیداش می‌کنید. اونور دیوار می‌بینمتون.',
    rightButtonText: 'حله!',
    leftButtonText: 'قبلی',
    image: '/characters/moom-posht.png',
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
      <Dialog
        open={messageNumber == 4}
        goBackward={() => setMessageNumber(3)}
        goForward={() => setMessageNumber(5)}
        {...MESSAGES[4]}
      />
    </>
  );
}

export default Index;