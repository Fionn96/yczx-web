const YEAR = new Date().getFullYear();

export default {
	footer: (
		<footer>
			<small>
				<time>{YEAR}</time> © <a
					target="_blank"
					href="tencent://message/?uin=3245020"
					rel="noreferrer"
				>Yaxley</a>
			</small>
			<style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          text-decoration: none;
        }
      `}</style>
		</footer>
	),
	head: ({ _title, meta }) => (
		<>
			{meta.title && (
				<>
					<meta property="og:title" content={meta.title} />
					<meta name="twitter:title" content={meta.title} />
				</>
			)}
			{meta.description && (
				<>
					<meta name="description" content={meta.description} />
					<meta property="og:description" content={meta.description} />
					<meta name="twitter:description" content={meta.description} />
				</>
			)}
			{meta.tag && <meta name="keywords" content={meta.tag} />}
			{meta.author && <meta name="author" content={meta.author} />}
		</>
	),
	darkMode: true,
	navs: [
		{
			url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Yf6QZlce34m-y_DbhQV5IWTgjybi03DX&authKey=R4YR53BZuTf2UkoGQwD0Bfo%2FClTmn%2BkjFw4ceVDagK2Lzvv3g93U4hu8WGB8eD63&noverify=0&group_code=197768480",
			name: "交流群",
			target: "_blank",
		},
	],
};
