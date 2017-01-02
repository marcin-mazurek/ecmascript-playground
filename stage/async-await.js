(async () => {
  const response = await fetch('http://example.com/some.json');
  console.log(response.json());
})();
