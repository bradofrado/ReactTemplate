import React from 'react';
import './icon.css';

const iconComponents = {
    instagram({className}) { 
        return <svg className={className} width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12,5.447c2.136,0,2.389,0.008,3.233,0.047c0.78,0.036,1.204,0.166,1.485,0.275c0.373,0.145,0.64,0.318,0.92,0.598 c0.28,0.28,0.453,0.546,0.598,0.92c0.11,0.282,0.24,0.706,0.275,1.485c0.038,0.844,0.047,1.097,0.047,3.233 s-0.008,2.389-0.047,3.233c-0.036,0.78-0.166,1.204-0.275,1.485c-0.145,0.373-0.318,0.64-0.598,0.92 c-0.28,0.28-0.546,0.453-0.92,0.598c-0.282,0.11-0.706,0.24-1.485,0.275c-0.843,0.038-1.096,0.047-3.233,0.047 s-2.389-0.008-3.233-0.047c-0.78-0.036-1.204-0.166-1.485-0.275c-0.373-0.145-0.64-0.318-0.92-0.598 c-0.28-0.28-0.453-0.546-0.598-0.92c-0.11-0.282-0.24-0.706-0.275-1.485c-0.038-0.844-0.047-1.097-0.047-3.233 S5.45,9.616,5.488,8.773c0.036-0.78,0.166-1.204,0.275-1.485c0.145-0.373,0.318-0.64,0.598-0.92c0.28-0.28,0.546-0.453,0.92-0.598 c0.282-0.11,0.706-0.24,1.485-0.275C9.611,5.455,9.864,5.447,12,5.447 M12,4.005c-2.173,0-2.445,0.009-3.298,0.048 C7.85,4.092,7.269,4.227,6.76,4.425C6.234,4.63,5.787,4.903,5.343,5.348C4.898,5.793,4.624,6.239,4.42,6.765 c-0.198,0.509-0.333,1.09-0.372,1.942C4.009,9.56,4,9.833,4,12.005c0,2.173,0.009,2.445,0.048,3.298 c0.039,0.852,0.174,1.433,0.372,1.942c0.204,0.526,0.478,0.972,0.923,1.417c0.445,0.445,0.891,0.718,1.417,0.923 c0.509,0.198,1.09,0.333,1.942,0.372c0.853,0.039,1.126,0.048,3.298,0.048s2.445-0.009,3.298-0.048 c0.852-0.039,1.433-0.174,1.942-0.372c0.526-0.204,0.972-0.478,1.417-0.923c0.445-0.445,0.718-0.891,0.923-1.417 c0.198-0.509,0.333-1.09,0.372-1.942C19.991,14.45,20,14.178,20,12.005s-0.009-2.445-0.048-3.298 c-0.039-0.852-0.174-1.433-0.372-1.942c-0.204-0.526-0.478-0.972-0.923-1.417c-0.445-0.445-0.891-0.718-1.417-0.923 c-0.509-0.198-1.09-0.333-1.942-0.372C14.445,4.014,14.173,4.005,12,4.005L12,4.005z"></path><path d="M12,7.897c-2.269,0-4.108,1.839-4.108,4.108S9.731,16.113,12,16.113s4.108-1.839,4.108-4.108S14.269,7.897,12,7.897z  M12,14.672c-1.473,0-2.667-1.194-2.667-2.667S10.527,9.339,12,9.339s2.667,1.194,2.667,2.667S13.473,14.672,12,14.672z">
            </path><circle cx="16.27" cy="7.735" r="0.96"></circle>
        </svg>
    },
    facebook({className}) { 
        return <svg className={className} width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20,5V19a1.007,1.007,0,0,1-1,1H15V13.776h2l0.336-2.3H15V9.659a0.912,0.912,0,0,1,1-1.031h1.5V6.55a11.284,11.284,0,0,0-1.641-.109c-2.2,0-3.3,1.219-3.3,3.039v1.992h-2v2.3h2V20H5a1.007,1.007,0,0,1-1-1V5A1.007,1.007,0,0,1,5,4H19A1.007,1.007,0,0,1,20,5Z">
            </path>
        </svg>
    },
    github({className}) { 
        return <svg className={className} width="24" height="32" viewBox="0 0 256 250" version="1.1" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
            </g>
        </svg>
    },
    spotify({className}) { 
        return <svg className={className} viewBox="-5 -5 40 40">
            <path d="M13.894 1.056c-4.584.4-8.563 2.873-10.909 6.783-1.036 1.725-1.645 3.554-1.909 5.723-.076.62-.064 2.37.024 3.042.416 3.297 1.825 6.147 4.151 8.404a13.923 13.923 0 0 0 8.463 3.902c1.024.092 2.625.032 3.634-.14 5.82-1 10.416-5.595 11.417-11.414.172-1.008.232-2.61.14-3.634-.372-4.026-2.458-7.672-5.764-10.069-1.874-1.36-4.04-2.213-6.405-2.521-.717-.092-2.182-.132-2.842-.076zm1.16 7.444c3.395.268 6.193.976 8.587 2.169 1.185.592 1.385.764 1.525 1.32.152.589-.136 1.185-.7 1.461-.193.096-.273.112-.565.112h-.34l-.56-.304c-2.21-1.196-4.7-1.873-7.986-2.165-.777-.068-3.363-.068-4.124 0-1.325.12-2.485.316-3.518.592-.837.228-1.25.172-1.65-.228A1.287 1.287 0 0 1 5.677 9.7c.252-.284.468-.376 1.349-.6 1.385-.352 2.898-.56 4.767-.656.496-.024 2.706.012 3.263.056zm-.664 4.802c2.97.252 5.82 1.1 8.05 2.405.484.28.677.48.765.789.16.544-.16 1.156-.693 1.332a1.48 1.48 0 0 1-.404.028c-.248-.012-.312-.04-.889-.36-1.265-.704-2.474-1.168-4.03-1.549-2.92-.716-6.242-.724-8.9-.02-.82.22-.844.225-1.056.197a1.045 1.045 0 0 1-.809-.549c-.1-.18-.116-.256-.116-.512 0-.26.016-.328.124-.52.18-.316.368-.444.88-.593 1.218-.356 2.699-.6 4.164-.688.68-.04 2.202-.02 2.914.04zm.344 4.582c2.218.237 4.155.845 5.98 1.873.637.36.805.577.777 1.013-.02.336-.164.552-.472.708-.34.176-.516.144-1.149-.216-3.15-1.78-6.93-2.197-11.484-1.257-.465.097-.689.125-.801.105-.44-.085-.697-.393-.697-.845 0-.356.149-.608.44-.76.385-.196 2.763-.58 4.224-.68.716-.049 2.482-.017 3.182.06z"></path>
        </svg>
    },
    apple({className}) { 
        return <svg className={className} viewBox="-40 -40 650 650">
            <path d="M395.748 272.046c-.646-64.841 52.88-95.938 55.271-97.483-30.075-44.01-76.925-50.039-93.62-50.736-39.871-4.037-77.798 23.474-98.033 23.474-20.184 0-51.409-22.877-84.476-22.276-43.458.646-83.529 25.269-105.906 64.19-45.152 78.35-11.563 194.42 32.445 257.963 21.504 31.104 47.146 66.038 80.813 64.79 32.421-1.294 44.681-20.979 83.878-20.979 39.196 0 50.215 20.979 84.524 20.335 34.888-.648 56.991-31.699 78.347-62.898 24.694-36.084 34.862-71.019 35.462-72.812-.775-.354-68.031-26.119-68.705-103.568zM331.28 81.761C349.149 60.082 361.21 30.005 357.92 0c-25.739 1.048-56.938 17.145-75.405 38.775-16.57 19.188-31.075 49.813-27.188 79.218 28.734 2.242 58.065-14.602 75.953-36.232z"></path>
        </svg>
    },
    itunes({className}) {
        return <svg className={className} viewBox="-4 -6 38 38">
            <path d="M28.187 7.195c-.001-.867-.076-1.728-.282-2.574-.372-1.536-1.247-2.713-2.561-3.573A5.869 5.869 0 0 0 23.14.193a12.446 12.446 0 0 0-1.838-.177c-.048-.002-.098-.009-.146-.014H7.032l-.534.03c-.878.05-1.75.146-2.575.472C2.351 1.126 1.219 2.21.555 3.768.33 4.296.212 4.856.129 5.423c-.067.46-.105.922-.118 1.387-.001.036-.009.072-.012.108v14.359l.03.498c.059.957.181 1.908.584 2.787.764 1.668 2.041 2.764 3.799 3.291.495.149 1.005.22 1.519.268a20.62 20.62 0 0 0 1.957.072c4.319 0 8.638 0 12.957-.002.617 0 1.231-.039 1.844-.116.967-.124 1.876-.412 2.697-.952a5.919 5.919 0 0 0 2.208-2.594c.219-.495.344-1.021.434-1.555.134-.793.163-1.595.162-2.397-.002-4.461.001-8.921-.003-13.382m-7.545 4.687c0 2.237.001 4.474-.001 6.71 0 .49-.067.971-.285 1.417-.339.694-.894 1.13-1.63 1.339-.41.117-.829.184-1.256.203a2.193 2.193 0 0 1-2.284-1.804 2.208 2.208 0 0 1 1.221-2.374c.38-.188.786-.293 1.196-.381.444-.096.89-.18 1.332-.282.322-.074.537-.271.6-.606.015-.074.021-.151.021-.227.001-2.132.001-4.263-.001-6.394a.88.88 0 0 0-.03-.217c-.046-.177-.175-.285-.357-.275a4.05 4.05 0 0 0-.558.078c-.893.176-1.785.357-2.677.537l-2.734.552-1.614.326c-.019.004-.038.01-.056.015-.325.09-.443.239-.458.575-.002.051-.001.102-.001.154-.001 3.056 0 6.113-.002 9.168 0 .494-.055.982-.253 1.441-.327.754-.905 1.223-1.685 1.45a5.202 5.202 0 0 1-1.263.202c-1.126.042-2.061-.706-2.254-1.814-.167-.955.27-1.98 1.354-2.439.419-.176.859-.273 1.301-.365.337-.071.675-.135 1.011-.207.449-.098.684-.38.703-.839.002-.06.001-.117.001-.177 0-3.477 0-6.955.002-10.432 0-.145.015-.294.049-.435.082-.335.321-.526.641-.609.3-.078.605-.132.909-.194l2.583-.52 2.669-.539c.786-.159 1.572-.32 2.36-.475.258-.051.52-.103.78-.124.364-.029.614.2.651.566.009.087.014.175.014.263.002 2.245.002 4.489.001 6.733z"></path>
        </svg>
    },
    amazon({className}) { 
        return <svg className={className} viewBox="-4 -6 38 38">
            <path d="M.148 19.79c-.1-.077-.148-.148-.148-.215 0-.043.015-.082.048-.115a.252.252 0 0 1 .197-.099.43.43 0 0 1 .215.068c1.847 1.047 3.881 1.866 6.109 2.457 2.226.592 4.533.887 6.916.887 1.516 0 3.059-.135 4.635-.405a28.068 28.068 0 0 0 4.715-1.244 3.82 3.82 0 0 1 .331-.115c.109-.035.228-.077.349-.131a.558.558 0 0 1 .331-.035c.109.022.188.07.233.148.03.056.051.117.063.182 0 .131-.063.236-.197.313-.179.129-.364.25-.555.353a9.904 9.904 0 0 0-.555.323c-1.422.766-2.983 1.34-4.688 1.72a22.69 22.69 0 0 1-4.959.57c-2.538 0-4.915-.413-7.122-1.236A19.889 19.889 0 0 1 .148 19.79zM15.62 7.506c0-.324-.003-.657-.016-1.002a1.599 1.599 0 0 0-.312-.917 1.488 1.488 0 0 0-.698-.551 2.39 2.39 0 0 0-.861-.167h-.214a2.941 2.941 0 0 0-1.35.458c-.403.263-.663.655-.785 1.177a.683.683 0 0 1-.452.518l-2.713-.344a.809.809 0 0 1-.316-.147c-.103-.076-.132-.202-.091-.376.155-.719.424-1.326.807-1.815.385-.491.84-.892 1.367-1.202a6.204 6.204 0 0 1 1.719-.687 11.608 11.608 0 0 1 1.868-.286h.576a9.54 9.54 0 0 1 2.222.286c.789.19 1.474.531 2.055 1.021.34.292.595.613.768.955.17.343.285.703.352 1.078.066.375.099.77.099 1.183v5.456c0 .635.11 1.123.328 1.468.218.346.464.673.73.983a.546.546 0 0 1 .128.343.382.382 0 0 1-.161.306c-.273.241-.625.522-1.058.843-.433.321-.794.602-1.082.843-.2.125-.443.136-.731.031-.455-.366-.77-.652-.949-.852l-.679-.787a7.731 7.731 0 0 1-1.325 1.033 5.52 5.52 0 0 1-1.328.575c-.604.125-1.279.189-2.02.189-1.173 0-2.156-.331-2.95-.99-.792-.66-1.188-1.649-1.188-2.968 0-1.089.272-1.999.818-2.729.546-.728 1.273-1.275 2.189-1.643.47-.2.97-.353 1.504-.458a21.085 21.085 0 0 1 1.667-.26c.382-.043.746-.077 1.095-.1.348-.022.679-.056.985-.1v-.365h.002zm0 2.518c-.361 0-.725.011-1.083.032a7.276 7.276 0 0 0-1.018.135 3.926 3.926 0 0 0-1.507.833c-.418.378-.628.934-.628 1.67 0 .587.154 1.061.464 1.417.31.356.734.534 1.274.534a.967.967 0 0 0 .23-.024.704.704 0 0 1 .167-.026c.697-.154 1.219-.549 1.573-1.184.319-.479.488-.94.503-1.385.018-.444.024-.928.024-1.451v-.551h.001zm9.125 13.31c-.115.109-.221.143-.316.099-.091-.044-.118-.132-.072-.263l.315-.758c.121-.309.23-.614.336-.916.106-.302.176-.576.206-.825.033-.247.006-.425-.082-.535-.134-.176-.431-.274-.892-.297h-.282c-.376 0-.751.016-1.125.05a2.74 2.74 0 0 1-.579.065 1.89 1.89 0 0 0-.513.067c-.13 0-.209-.04-.23-.116-.021-.077.031-.161.164-.249.343-.22.728-.4 1.158-.544a8.919 8.919 0 0 1 1.837-.214c.151 0 .306.006.458.017.367.023.667.061.904.115.236.057.394.117.479.182.021.044.045.102.069.173s.037.162.037.271v.134c0 .218-.045.488-.133.807-.085.317-.2.639-.34.963-.139.326-.33.647-.566.966a3.705 3.705 0 0 1-.833.808z"></path>
        </svg>
    },
    pandora({className}) { 
        return <svg className={className} viewBox="-70 -70 400 400">
            <path d="M8.229 245.472V.229h116.444c2.538.218 5.078.417 7.614.656 11.519 1.083 22.696 3.611 33.395 8.07 12.847 5.354 23.982 13.074 32.699 24.043 10.201 12.838 15.236 27.691 16.88 43.825 1.107 10.866.756 21.694-1.152 32.456-2.185 12.32-6.396 23.873-13.231 34.404-10.335 15.924-24.744 26.797-42.195 33.839-15.846 6.393-32.439 9.063-49.418 9.59-7.465.231-14.94.133-22.411.184-.444.003-.889 0-1.459 0v1.607c0 14.981.007 29.963-.003 44.943-.004 6.927-4.721 11.624-11.632 11.625l-65.531.001z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M237.229 18.759h-2.307V4.217a26.68 26.68 0 0 0-.265-.08c-.136.266-.291.524-.405.799-1.793 4.321-3.573 8.646-5.383 12.96-.143.341-.476.602-.721.901-.245-.299-.58-.56-.724-.901-1.937-4.627-3.847-9.267-5.954-13.889v14.744h-2.331c-.027-.269-.068-.487-.068-.704-.004-5.715-.004-11.43 0-17.144 0-.225.055-.45.085-.674h3.66c.044.182.066.373.135.545 1.611 4.019 3.226 8.037 4.846 12.052.09.223.231.424.412.748L233.568.23h3.66l.001 18.529z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m233.568.229-5.359 13.344c-.181-.323-.322-.525-.412-.748-1.62-4.015-3.234-8.033-4.846-12.052-.068-.172-.091-.363-.135-.545l10.752.001zM215.953.229v2.204h-5.196v16.301h-2.364V2.465h-5.251V.229h12.811z"></path>
        </svg>
    },
    youtube({className}) { 
        return <svg className={className} viewBox="-8 -8 70 70">
            <path d="M26 0C11.64 0 0 11.64 0 26s11.64 26 26 26 26-11.64 26-26S40.36 0 26 0zm-3.125 10.156.844.031v.126c-.016.111-.608 2.07-1.219 4.062-.067.22-.234.776-.375 1.25-.14.474-.307 1.036-.375 1.25l-.125.406v2.438c0 2.28-.025 2.418-.094 2.437-.153.042-1.754.013-1.781-.031-.036-.058-.037-3.51 0-4 .047-.628-.05-1.113-.5-2.375-.146-.41-.418-1.19-.594-1.75-1.273-4.05-1.215-3.811-1.093-3.813.838-.007 1.894-.011 1.906 0 .008.009.268.987.593 2.188.326 1.2.588 2.198.594 2.219.007.02.211-.656.438-1.532.475-1.835.74-2.865.75-2.875.021-.019.259-.035 1.031-.03zm3.375 2.938c.424.025.86.153 1.25.406.498.322.776.776.938 1.469.071.306.093.54.093 2.687 0 2.61-.014 2.779-.281 3.344-.257.545-.83 1.02-1.437 1.188-.268.074-.74.121-.97.093-.76-.092-1.475-.545-1.812-1.156-.343-.623-.364-.944-.343-3.688.015-2.125.009-2.258.093-2.562.201-.725.615-1.233 1.219-1.531a2.422 2.422 0 0 1 1.25-.25zm8.219.094V22.125l-.125.031c-.14.029-1.428.03-1.532 0-.063-.017-.062-.087-.062-.437v-.407l-.25.25c-.556.542-1.163.793-1.719.72-.422-.057-.643-.229-.812-.563-.213-.42-.219-.41-.219-4.594v-3.906h1.688l.03 3.593c.02 3.911.017 3.817.25 3.875.216.054.454-.041.75-.343l.282-.313v-3.406l.031-3.406h.844l.844-.032zM26 14.655c-.246.035-.447.21-.531.5-.087.298-.088 4.733 0 5.031.065.224.28.467.437.5a.79.79 0 0 0 .594-.125c.292-.222.296-.235.313-2.75.012-1.952-.004-2.264-.063-2.53-.08-.36-.195-.552-.469-.626a.75.75 0 0 0-.281 0zm-.719 8.656c1.535-.008 3.025.003 4.313.032 2.974.066 6.177.215 7.031.312 1.105.126 1.9.696 2.438 1.781.405.82.523 1.473.687 3.438.13 1.557.148 2.516.125 4.312-.028 2.15-.14 4.03-.344 5.094-.216 1.124-.746 2.107-1.406 2.625-.51.401-1.053.577-1.906.625-.254.015-.58.02-.719.032-.493.038-3.116.146-4.562.187-2.151.06-5.923.068-7.97.031-.98-.017-2.123-.015-2.562-.031-2.946-.106-4.97-.23-5.375-.313-.576-.116-1.22-.51-1.594-.968-.598-.735-.938-1.627-1.093-3-.36-3.193-.343-6.92.031-10 .164-1.35.567-2.32 1.25-3 .39-.388.75-.591 1.25-.719.811-.207 5.802-.41 10.406-.437zm-10.593 3v1.594h1.875l.03 5.063c.006 2.783.02 5.095.032 5.125.016.041.202.04.844.031h.812l.032-5.094.03-5.125h1.908l-.032-.812v-.781H14.688zm12.03 0V38.157h1.5v-.406c0-.264.032-.406.063-.406.026 0 .193.14.375.312.588.553 1.084.719 1.719.532.243-.072.554-.391.687-.688.256-.57.25-.582.25-3.781 0-2.627.004-2.936-.062-3.219-.211-.909-.696-1.308-1.469-1.25-.433.033-.779.2-1.187.594-.178.171-.327.312-.344.312-.017 0-.031-.875-.031-1.937v-1.907h-1.5zm8.407 2.938a2.155 2.155 0 0 0-.812.125c-.815.297-1.306.83-1.5 1.656-.07.292-.063.546-.063 2.688 0 2.627-.019 2.743.25 3.281.479.958 1.692 1.461 2.781 1.156.81-.226 1.384-.783 1.594-1.562.036-.133.05-.515.063-.844l.03-.594h-1.562v.532c-.022.61-.09.836-.312 1.03-.237.208-.687.222-.969.032-.336-.226-.392-.63-.375-1.875V34h1.625l1.594-.031-.031-1.313c-.025-1.463-.035-1.668-.282-2.187-.35-.74-1.188-1.199-2.031-1.219zm-14.5.125v3.781c0 4.14-.013 4.226.219 4.625.253.436.874.578 1.5.344.302-.113.638-.353.937-.656.138-.14.283-.25.313-.25.04 0 .062.12.062.468v.47h1.5v-8.782h-1.5v6.75l-.344.344c-.258.257-.372.331-.53.375-.271.074-.42.002-.532-.188-.084-.143-.083-.2-.094-3.718l-.031-3.563h-1.5zm14.469 1.219c.337 0 .543.145.687.437.092.186.113.254.125.938v.75h-.812c-.71 0-.822-.006-.844-.063-.039-.101.011-1.266.062-1.437.122-.403.376-.625.782-.625zm-5.969.125a.544.544 0 0 1 .469.312c.076.154.085.277.093 2.625.01 2.253.004 2.498-.062 2.688a.58.58 0 0 1-.219.312c-.252.169-.604.129-.937-.125l-.156-.125V31.062l.156-.125c.225-.171.452-.234.656-.218z"></path>
        </svg>
    },
    cart({className}) { 
        return <svg className={className} height="32" width="20" viewBox="0 0 24 24" focusable="false">
            <circle cx="9" cy="20" r="2"></circle>
            <circle cx="16" cy="20" r="2"></circle>
            <path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z"></path>
        </svg>
    },
    profile({className}) { 
        return <svg className={className} height="32" width="16" viewBox="0 0 16 16">
            <path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z">
            </path>
        </svg>
    },
};

function Icon({icon, className}) {
    if (!Object.keys(iconComponents).includes(icon)) {
        return <span>Invalid Icon</span>
    }

    return React.createElement(iconComponents[icon], {className});
}

export default Icon;