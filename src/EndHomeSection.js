import styles from './stylesheets/EndHomeSection.module.css'
import { Link } from 'react-router-dom';
const EndHomeSection = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.visualSection}>
                <svg width="100%" height="100%" viewBox="0 0 655 836" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Desktop - 1">
                        <path id="head" d="M589.94 394.639L550.346 310.668V309.571C550.346 176.374 441.954 68 308.748 68C175.543 68 67.15 176.374 67.15 309.57C67.15 369.467 84.8746 421.977 122.781 473.893V556.982C122.781 577.774 135.122 596.436 154.253 604.538L155.829 605.204L157.461 605.719L348.266 664.679C354.1 666.882 360.215 667.999 366.479 667.999C376.627 667.999 386.473 665.035 394.952 659.437C409.449 649.834 418.115 633.743 418.115 616.364V570.055H490.288C518.779 570.055 541.942 546.891 541.942 518.419V474.727L565.8 463.144C591.141 450.813 601.963 420.082 589.94 394.639ZM551.041 432.741L518.198 448.685C512.045 451.677 508.145 457.912 508.145 464.758V518.419C508.145 528.267 500.154 536.257 490.289 536.257H402.155C392.308 536.257 384.317 544.275 384.317 554.121V616.364C384.317 622.338 381.316 627.937 376.308 631.246C373.345 633.196 369.931 634.201 366.479 634.201C364.116 634.201 361.734 633.732 359.482 632.776L167.438 573.421C160.836 570.628 156.578 564.147 156.578 556.982V462.593C116.778 411.434 100.947 363.128 100.947 309.57C100.947 194.839 193.977 101.799 308.746 101.799C423.496 101.799 516.545 194.839 516.545 309.57C516.545 312.337 516.433 315.066 516.32 317.795L559.384 409.072C563.55 417.915 559.837 428.466 551.041 432.741Z" fill="white" />
                        <path className={styles.gear}id="gear" d="M381.563 252.75H366.875C365.328 248.18 363.711 244.375 361.852 240.711L362.094 241.234L372.547 230.891C375.281 228.547 377 225.094 377 221.234C377 218.063 375.836 215.156 373.906 212.93L373.922 212.945L349.094 188.117C346.883 186.195 343.984 185.031 340.805 185.031C336.945 185.031 333.484 186.758 331.164 189.484L331.148 189.5L320.742 199.891C317.602 198.281 313.805 196.664 309.883 195.312L309.242 195.117L309.313 180.43C309.336 180.117 309.352 179.758 309.352 179.391C309.352 172.719 304.195 167.25 297.648 166.758H297.609H262.484C255.891 167.25 250.727 172.719 250.727 179.391C250.727 179.758 250.742 180.117 250.773 180.477V180.43V195.109C246.203 196.656 242.406 198.266 238.742 200.117L239.266 199.875L228.922 189.437C226.586 186.687 223.125 184.961 219.266 184.961C216.086 184.961 213.188 186.133 210.961 188.063L210.977 188.047L186.141 212.883C184.219 215.094 183.047 218 183.047 221.172C183.047 225.031 184.773 228.492 187.5 230.813L187.516 230.828L197.898 241.211C196.281 244.359 194.664 248.172 193.313 252.109L193.125 252.75L178.438 252.68C178.125 252.656 177.766 252.641 177.398 252.641C170.727 252.641 165.258 257.805 164.766 264.352V264.391V299.508C165.25 306.102 170.727 311.266 177.398 311.266C177.766 311.266 178.125 311.25 178.484 311.219H178.438H193.125C194.672 315.789 196.281 319.594 198.141 323.258L197.906 322.742L187.477 333.055C184.734 335.398 183.008 338.867 183.008 342.734C183.008 345.914 184.172 348.82 186.102 351.047L186.086 351.031L210.922 375.859C212.867 377.781 215.539 378.977 218.5 378.977C218.555 378.977 218.609 378.977 218.664 378.977H218.656C222.68 378.875 226.289 377.172 228.875 374.477L228.883 374.469L239.273 364.078C242.422 365.695 246.234 367.312 250.172 368.664L250.813 368.859L250.742 383.531C250.719 383.844 250.703 384.203 250.703 384.562C250.703 391.234 255.867 396.711 262.414 397.195H262.453H297.578C304.164 396.695 309.32 391.234 309.32 384.562C309.32 384.195 309.305 383.836 309.273 383.477V383.523V368.828C313.844 367.281 317.656 365.664 321.328 363.805L320.805 364.047L331.125 374.461C333.719 377.148 337.32 378.852 341.313 378.945H341.328H341.344C341.391 378.945 341.445 378.945 341.492 378.945C344.445 378.945 347.117 377.766 349.078 375.859L373.898 351.039C375.805 349.094 376.984 346.422 376.984 343.477C376.984 343.406 376.984 343.344 376.984 343.273C376.891 339.266 375.195 335.68 372.516 333.094L372.508 333.086L362.109 322.68C363.719 319.547 365.328 315.75 366.688 311.828L366.883 311.18L381.563 311.25C381.875 311.273 382.234 311.289 382.594 311.289C389.273 311.289 394.742 306.125 395.227 299.57V299.531V264.414C394.734 257.82 389.266 252.664 382.586 252.664C382.219 252.664 381.859 252.68 381.508 252.711H381.555L381.563 252.75ZM381.594 299.578L362.719 299.484C362.563 299.484 362.43 299.562 362.281 299.57C360.734 299.758 359.375 300.469 358.367 301.516C357.938 302.078 357.563 302.711 357.266 303.391L357.242 303.453C357.203 303.562 357.117 303.641 357.086 303.758C355.211 310.352 352.766 316.094 349.711 321.445L349.914 321.062C349.492 321.844 349.242 322.766 349.242 323.75C349.242 323.758 349.242 323.773 349.242 323.781C349.242 323.906 349.266 324 349.273 324.133C349.32 325.594 349.898 326.906 350.828 327.891L350.898 328.07L364.234 341.422C365.086 342.273 365.305 343.102 365.609 342.797L341.375 367.273C340.602 367.172 339.922 366.797 339.438 366.258L326.18 352.875C326.117 352.805 326.008 352.836 325.945 352.773C325 351.898 323.758 351.344 322.383 351.266H322.367C322.211 351.242 322.023 351.227 321.836 351.219C320.859 351.219 319.93 351.469 319.133 351.906L319.164 351.891C314.195 354.719 308.438 357.172 302.398 358.945L301.82 359.094C301.703 359.125 301.625 359.211 301.516 359.25C300.766 359.578 300.117 359.969 299.523 360.414L299.547 360.398C299.273 360.664 299.031 360.953 298.82 361.258L298.805 361.273C298.594 361.531 298.391 361.82 298.219 362.133L298.203 362.164C297.945 362.797 297.742 363.531 297.633 364.305L297.625 364.359C297.617 364.484 297.547 364.602 297.547 364.727V383.57C297.547 384.742 297.117 385.508 297.547 385.523L263.094 385.703C262.688 385.18 262.438 384.508 262.438 383.781C262.438 383.719 262.438 383.656 262.445 383.594L262.539 364.758C262.539 364.625 262.477 364.508 262.461 364.383C262.422 363.969 262.344 363.586 262.227 363.219L262.234 363.258C262.141 362.844 262.016 362.477 261.859 362.125L261.875 362.164C261.469 361.492 261.023 360.914 260.523 360.391C260.297 360.203 260.039 360.031 259.773 359.875L259.742 359.859C259.398 359.625 259.016 359.422 258.602 359.266L258.563 359.25C258.453 359.211 258.375 359.125 258.258 359.094C251.641 357.211 245.875 354.766 240.508 351.719L240.906 351.922C240.133 351.5 239.219 351.25 238.242 351.25C238.07 351.242 237.93 351.281 237.758 351.289C236.352 351.352 235.086 351.914 234.125 352.797C234.063 352.859 233.969 352.828 233.906 352.891L220.586 366.211C219.75 367.047 218.898 367.297 219.195 367.602L194.711 343.375C194.805 342.594 195.18 341.914 195.727 341.422L209.117 328.18L209.203 327.977C210.102 327.016 210.68 325.742 210.742 324.336V324.32C210.75 324.156 210.781 324.031 210.781 323.867C210.781 323.859 210.781 323.852 210.781 323.844C210.781 322.859 210.531 321.93 210.094 321.125L210.109 321.156C207.258 316.187 204.805 310.445 203.055 304.398L202.914 303.836C202.883 303.719 202.789 303.633 202.75 303.516C202.422 302.781 202.047 302.141 201.609 301.562L201.625 301.586C201.117 301.109 200.563 300.672 199.969 300.297L199.922 300.273C199.523 300.078 199.07 299.922 198.586 299.828L198.547 299.82C198.32 299.75 198.039 299.695 197.75 299.656H197.719C197.563 299.641 197.43 299.562 197.266 299.562H178.422C177.234 299.578 176.484 299.133 176.469 299.547L176.297 265.102C176.82 264.695 177.477 264.445 178.203 264.445C178.273 264.445 178.336 264.445 178.406 264.453H178.398L197.273 264.547C198.461 264.516 199.555 264.125 200.453 263.484L200.438 263.5C200.625 263.391 200.781 263.281 200.938 263.164L200.922 263.172C201.773 262.484 202.414 261.563 202.758 260.508L202.766 260.469C202.789 260.391 202.875 260.359 202.898 260.273C204.789 253.656 207.234 247.906 210.289 242.539L210.086 242.93C210.508 242.148 210.758 241.227 210.758 240.242C210.758 240.234 210.758 240.234 210.758 240.227C210.766 240.078 210.734 239.969 210.727 239.82C210.672 238.383 210.102 237.086 209.188 236.109L209.109 235.922L195.789 222.602C194.945 221.742 194.68 220.875 194.414 221.211L218.648 196.727C219.438 196.789 220.125 197.18 220.586 197.75L220.594 197.758L233.852 211.141C233.992 211.281 234.211 211.227 234.359 211.352C235.336 212.297 236.664 212.883 238.133 212.883C239.148 212.883 240.094 212.602 240.906 212.117L240.883 212.133C245.852 209.289 251.602 206.844 257.641 205.086L258.203 204.945C258.313 204.914 258.391 204.828 258.5 204.797C258.945 204.633 259.32 204.43 259.68 204.195L259.656 204.211C260.93 203.508 261.852 202.305 262.164 200.875L262.172 200.844C262.281 200.508 262.367 200.117 262.406 199.711V199.688C262.414 199.563 262.477 199.453 262.477 199.328V180.484C262.477 179.305 262.914 178.539 262.484 178.531L296.938 178.352C297.344 178.875 297.586 179.539 297.586 180.266C297.586 180.336 297.586 180.398 297.578 180.469L297.484 199.305C297.484 199.43 297.547 199.539 297.555 199.672C297.594 200.102 297.672 200.5 297.797 200.883L297.789 200.844C298.344 202.672 299.688 204.117 301.414 204.797L301.453 204.812C301.563 204.852 301.648 204.937 301.758 204.969C308.359 206.859 314.102 209.305 319.453 212.352L319.063 212.148C319.883 212.617 320.867 212.898 321.922 212.898H321.93C323.359 212.836 324.641 212.258 325.609 211.352C325.742 211.234 325.945 211.289 326.07 211.164L339.422 197.844C340.242 197.016 341.086 196.773 340.797 196.469L365.273 220.703C365.18 221.484 364.813 222.156 364.266 222.648L350.867 235.906L350.781 236.109C349.875 237.07 349.297 238.352 349.234 239.766V239.781C349.227 239.938 349.195 240.063 349.195 240.219C349.195 240.227 349.195 240.234 349.195 240.242C349.195 241.227 349.445 242.156 349.883 242.961L349.867 242.93C352.719 247.898 355.172 253.641 356.914 259.68L357.055 260.234C357.078 260.328 357.18 260.367 357.203 260.453C357.563 261.523 358.195 262.43 359.016 263.102L359.023 263.109C359.172 263.227 359.344 263.344 359.516 263.445L359.539 263.461C360.414 264.086 361.508 264.477 362.68 264.508H381.531C382.719 264.5 383.469 264.953 383.484 264.516L383.648 298.961C383.141 299.375 382.484 299.625 381.773 299.625C381.695 299.625 381.625 299.625 381.547 299.617H381.555L381.594 299.578ZM280 244.891C259.508 244.891 242.891 261.508 242.891 282C242.891 302.492 259.508 319.109 280 319.109C300.492 319.109 317.109 302.492 317.109 282C317.086 261.516 300.484 244.914 280 244.891ZM280 307.391C265.977 307.391 254.609 296.023 254.609 282C254.609 267.977 265.977 256.609 280 256.609C294.023 256.609 305.391 267.977 305.391 282C305.375 296.016 294.016 307.375 280 307.391Z" fill="white" />
                        <circle className={styles.middleCircle}id="middleCircle" cx="279" cy="271" r="20" fill="white" />
                        <g className={styles.firstLines} id="firstLines">
                            <line id="Line" x1="269.545" y1="265.141" x2="322.836" y2="331.361" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_2" x1="270.122" y1="280.287" x2="330.913" y2="220.878" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_3" x1="202.008" y1="256.642" x2="285.782" y2="271.022" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_4" x1="220.713" y1="334.994" x2="279.17" y2="273.287" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_5" x1="278.116" y1="273.251" x2="262.053" y2="189.782" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_6" x1="291.263" y1="273.349" x2="375.77" y2="282.485" stroke="white" stroke-width="15" stroke-linecap="round" />
                        </g>
                        <g className={styles.firstCircles}id="firstCircles">
                            <circle id="circle" cx="326" cy="334" r="20" fill="white" />
                            <circle id="circle_2" cx="336" cy="221" r="20" fill="white" />
                            <circle id="circle_3" cx="218" cy="329" r="20" fill="white" />
                            <circle id="circle_4" cx="263" cy="201" r="20" fill="white" />
                            <circle id="circle_5" cx="194" cy="255" r="20" fill="white" />
                            <circle id="circle_6" cx="390" cy="283" r="20" fill="white" />
                        </g>
                        <g className={styles.sideLines}id="sideLines">
                            <line id="Line_7" x1="322.786" y1="338.336" x2="392.155" y2="289.214" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_8" x1="258.92" y1="200.261" x2="341.986" y2="218.288" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_9" x1="192.363" y1="251.521" x2="259.691" y2="199.637" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_10" x1="331.604" y1="215.237" x2="390.351" y2="276.668" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_11" x1="191.5" y1="255.718" x2="218.598" y2="336.283" stroke="white" stroke-width="15" stroke-linecap="round" />
                            <line id="Line_12" x1="225.974" y1="328.006" x2="310.792" y2="333.554" stroke="white" stroke-width="15" stroke-linecap="round" />
                        </g>
                        <g className={styles.award} id="award">
                            <path id="Vector" d="M247.825 623.825C247.825 616.991 239.922 611.497 237.925 605.328C235.853 598.944 238.937 589.859 235.066 584.544C231.156 579.172 221.547 579.322 216.175 575.413C210.859 571.541 208.047 562.334 201.662 560.253C195.494 558.256 187.834 563.984 181 563.984C174.166 563.984 166.506 558.247 160.347 560.253C153.962 562.325 151.15 571.541 145.834 575.413C140.462 579.322 130.853 579.172 126.944 584.544C123.062 589.859 126.156 598.934 124.075 605.328C122.069 611.497 114.175 616.991 114.175 623.825C114.175 630.659 122.078 636.153 124.075 642.322C126.147 648.706 123.062 657.791 126.934 663.106C130.844 668.478 140.453 668.328 145.825 672.238C151.141 676.109 153.953 685.316 160.337 687.397C166.506 689.403 174.166 683.666 180.991 683.666C187.816 683.666 195.484 689.403 201.644 687.397C208.028 685.325 210.841 676.109 216.156 672.238C221.528 668.328 231.137 668.478 235.047 663.106C238.919 657.791 235.834 648.706 237.906 642.322C239.922 636.153 247.825 630.659 247.825 623.825ZM181 662.291C160.319 662.291 143.5 645.472 143.5 624.791C143.5 604.109 160.319 587.291 181 587.291C201.681 587.291 218.5 604.109 218.5 624.791C218.5 645.472 201.681 662.291 181 662.291Z" fill="white" />
                            <path id="Vector_2" d="M209.125 624.791C209.125 640.297 196.506 652.916 181 652.916C165.494 652.916 152.875 640.297 152.875 624.791C152.875 609.284 165.494 596.666 181 596.666C196.506 596.666 209.125 609.284 209.125 624.791ZM252.391 755.356L222.081 679.578C215.95 683.019 214.122 691.7 207.25 695.197C197.397 700.222 190.45 693.041 181 693.041C171.55 693.041 164.613 700.222 154.75 695.197C147.888 691.7 146.05 683.019 139.919 679.578L109.609 755.356C104.809 767.366 127.028 758.441 130.712 757.325C140.734 754.288 140.153 778.775 149.913 775.991C152.416 775.278 155.078 768.894 155.078 768.894L181 703.1L206.922 768.894C206.922 768.894 209.584 775.269 212.087 775.991C221.847 778.784 221.266 754.288 231.288 757.325C234.972 758.441 257.191 767.356 252.391 755.356Z" fill="white" />
                        </g>
                    </g>
                </svg>
            </div>
            <div className={styles.infoSection}>
                <p>Learn</p>
                <p>Improve</p>
                <p>Achieve</p>
                <Link to="/signup">Try it out now</Link>
            </div>
        </div>
    );
}

export default EndHomeSection;