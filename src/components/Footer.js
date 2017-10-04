import React from 'react';

export const Footer = () => (
	<footer className='site-footer'>
		<div className='wrapper'>
			<div className='footer-social'>
				<ul>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://twitter.com/letsbsocial1">
									<div className="side">
										<img className="twitter" src={'./images/icons/twitter.png'} width="40" alt="twitter" />
									</div>
									<div className="side back">
										<img className="twitter" src={'./images/icons/twitter.png'} width="40" alt="twitter" />
									</div>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://github.com/interglobalmedia">
									<div className="side">
										<img className="github" src={'./images/icons/github.png'} width="40" alt="github" />
									</div>
									<div className="side back">
										<img className="github" src={'./images/icons/github.png'} width="40" alt="github" />
									</div>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://plus.google.com/u/0/110861192597778984723">
									<div className="side">
										<img className="google-plus" src={'./images/icons/google.png'} width="35" alt="google plus" />
									</div>
									<div className="side back">
										<img className="google-plus" src={'./images/icons/google.png'} width="35" alt="google plus" />
									</div>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div className="icon-container">
							<div className="icon">
								<a href="https://www.linkedin.com/in/mariacampbell/">
									<div className="side">
										<img className="linkedin" src={'./images/icons/linkedin_white_t.png'} width="40" alt="linkedin" />
									</div>
									<div className="side back">
										<img className="linkedin" src={'./images/icons/linkedin_white_t.png'} width="40" alt="linkedin" />
									</div>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div className='identity'>
			<p>© 2017 Maria D. Campbell</p>
		</div>
	</footer>
)
