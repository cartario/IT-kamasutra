import React from 'react';

function Profile() {
	return (
				<section className="profile">
			<div>
				<img className="profile-bg" src = "https://avatars.mds.yandex.net/get-pdb/1356247/63ee5ae6-2520-4006-9f10-cacb5f702ea8/s1200?webp=false" />
			</div>
			<div className="profile-info">
				<img className="profile-avatar" src="https://c7.hotpng.com/preview/556/742/534/avatar-youtube-8-ball-pool-user-avatar.jpg" />
				<div>
					Description
				</div>
			</div>
			<div className = "my-posts">
				My posts
				<div>
					new post
				</div>
				<article>
					Post-1
				</article>
				<article>
					Post-2
				</article>
				<article>
					Post-3
				</article>
				<article>
					Post-4
				</article>
			</div>			
			</section>
	);
}

export default Profile;