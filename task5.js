	function findMissing(a,b,n,m)
	{
		for (let i = 0; i < n; i++)
		{
			let j;
			
			for (j = 0; j < m; j++)
				if (a[i] == b[j])
					break;

			if (j == m)
				console.log(a[i] + " ");
		}
	}
	
	let a=[ 1, 2, 6, 3, 4, 5 ];
	let b=[2, 4, 3, 1, 0];
	let n = a.length;
	let m = b.length;
	findMissing(a, b, n, m);
