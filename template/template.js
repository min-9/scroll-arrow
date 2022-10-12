export const template = `
  <style>
    :root {
      --color: #06A8FF;
      --rotate: 0deg;
    }

    .arrow {
      position: absolute;
      // top: 50%;
      // left: 50%;
      // margin-left: 36px;
      transform: rotate(var(--rotate)) translate(-50%, -50%);
    }

    .arrow > span {
      display: block;
      width: 30px;
      height: 30px;
      border-bottom: 5px solid var(--color);
      border-right: 5px solid var(--color);
      margin: -10px;
      // transform: rotate(var(--rotate));
      animation: scroll 1.8s infinite;
    }

    .arrow > span:nth-child(2) {
      animation-delay: -.2s;
    }

    .arrow > span:nth-child(3) {
      animation-delay: -.4s;
    }

    @keyframes scroll {
      0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
      }
    }
  </style>
  <div class="arrow">
    <span></span>
    <span></span>
    <span></span>
  </div>
`;
