import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Tawk.to script
    window.Tawk_API = window.Tawk_API || {};
    (function () {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66dcd2a0ea492f34bc0f281c/1i779dj2i';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default LiveChat;
