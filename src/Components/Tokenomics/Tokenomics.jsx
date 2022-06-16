import React from 'react'
import './tokenomics.css'

export default function Tokenomics() {
    return (
        <div>
            <div class="tokenomics-section" id="tokenomics" style={{background: "url('images/tokenomics-bg.jpg')"}}>
                <div class="container">
                    <div class="row mb-5 mb-md-0">
                        <div class="col-md-12 text-left text-lg-center">
                            <h2 class="section-title">Tokenomics</h2>
                            <p class="section-subtitle mb-4">Governance and Utility Tokens</p>
                            <br/>
                        </div>
                        <div id="wrapper" class="tokenomics-wrapper">
                            <div id="wrapper-inner">
                                <div id="scroll-right">
                                    <span class="arrow-right">
                                    </span>
                                </div>
                                <span id="scroll-title">
                                    Slide Left
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="tokenomics-comparison">
                                <div class="text-center">
                                    <div class="column-title">
                                    </div>
                                    <div class="column-description">
                                        <p>Blockchain</p>
                                        <p>Token Name</p>
                                        <p>Token Symbol</p>
                                        <p>Use Case</p>
                                        <p>Token Decimals</p>
                                        <p>Token Type</p>
                                        <p>Total Supply</p>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <div class="column-title">
                                        <h3>PGX <img src="images/pgx2.png" width="30" height="30" class="game-token-icon lazyloaded" alt="Game Token" data-ll-status="loaded"/><noscript><img src="images/pgx2.png" width="30" height="30" class="game-token-icon" alt="Game Token" /></noscript></h3>
                                    </div>
                                    <div class="column-description">
                                        <p>Polygon (Matic) Chain</p>
                                        <p>Pegaxy Stone</p>
                                        <p>PGX</p>
                                        <p>Governance</p>
                                        <p>18</p>
                                        <p>ERC-20</p>
                                        <p>1,000,000,000 PGX (1B)</p>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <div class="column-title">
                                        <h3>VIS <img src="images/vis-token.png" width="30" height="30" class="game-token-icon lazyloaded" alt="Game Token" data-ll-status="loaded"/><noscript><img src="images/vis-token.png" width="30" height="30" class="game-token-icon" alt="Game Token" /></noscript></h3>
                                    </div>
                                    <div class="column-description">
                                        <p>Polygon (Matic) Chain</p>
                                        <p>Vigorus</p>
                                        <p>VIS </p>
                                        <p>Utility</p>
                                        <p>18</p>
                                        <p>ERC-20</p>
                                        <p>Uncapped Utility Token</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
