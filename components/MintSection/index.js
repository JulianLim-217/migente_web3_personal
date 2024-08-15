import React, { useState } from "react";
import Button from "../Button";
import InputNumber from "./Components/InputNumber";
import { useCountdown } from "@/hooks/useCount";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { mainnet } from 'wagmi/chains'

function MintSection() {
  const targetDate = new Date("August 11, 2023 00:00:00");
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const [mintCounter, setMintCounter] = useState(1);
  const incrementCounter = () => {
    setMintCounter((prev) => prev + 1 );
  }

  const decrementCounter = () => {
    setMintCounter((prev) => {
      if (prev > 1) {
        return prev - 1
      } else {
        alert('Lower limit reached!');
        return 1
      }
    });
  }
 

////////////////////////////////////** Mint Config **//////////////////////////////////////////////

const { config : presaleConfig , error: presaleErr } = usePrepareContractWrite({
  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  abi: '',
  functionName: 'presale',
  args: [mintCounter],
  chainid: mainnet.id,
  onSuccess(data) {
    console.log('Success', data)
  },
  onError(error) {
    console.log('Error', error)
  },
})
const { write: presaleCall } = useContractWrite(presaleConfig);


  return (
    <div className="mint-section" id="mint">
      <div className="mint-section-inner">
        <div className="left-text-container">
          <div className="content">
            <div className="title">Join the culture</div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                As it pertains to history, there are three types of people.
                Those that write about it, those that read about it, and those
                that make it. Make history. Mint your NFT today and be a part of
                the historical culture of Migente.
              </div>
            </div>
          </div>
          <div className="countdown-wrapper">
            <img src="/svg/clock.svg" alt="" />
            <span className="countdown-nums">
              {" "}
              {` Presale Countdown -> ${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`}{" "}
            </span>
          </div>

          <div>
            <ConnectButton />
          </div>
          <div className="mint-buttons-wrapper">
            <div className="number-incrementor">
              <InputNumber mintCounter={mintCounter} incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
              <div className="input-btn-line-1" ></div>
              <div className="input-btn-line-2" ></div>
            </div>

            <div className="mint-now-btn">
              <Button variant="bw" value="Mint Presale" onClick={() => alert('Mint Not Live Yet')} />
            </div>
            {/* <div className="mint-now-btn">
              <Button variant="bw" value="Claim Rewards" />
            </div> */}
          </div>
        </div>
        <div className="right-image-container">
          <div className="image-grid">
            <div className="row-1">
              <div className="top-horizontal-bar"></div>
              <div className="left-vertical-bar"></div>
              <div className="right-vertical-bar"></div>

              <div className="img-wrapper">
                <img src="/image/mint/Christina_Aguilera.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/image/mint/Aztec_IV.png" alt="" />
              </div>
            </div>
            <div className="row-2">
              <div className="img-wrapper">
                <img src="/image/mint/Jaguar_Mask.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/image/mint/Big_Pun.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintSection;
