const { Builder, By } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
const URL = "http://localhost:3000";

async function UITest() {
  await driver.get(`${URL}`);
  await driver.sleep(1000);
  console.log((await P01()) ? "P01: PASS" : "P01: FAIL");
  await driver.get(`${URL}`);
  await driver.sleep(1000);
  console.log((await P02()) ? "P02: PASS" : "P02: FAIL");
  await driver.sleep(1000);
  console.log((await P03()) ? "P03: PASS" : "P03: FAIL");
  await driver.get(`${URL}`);
  await driver.sleep(1000);
  console.log((await P04()) ? "P04: PASS" : "P04: FAIL");
  await driver.get(`${URL}`);
  await driver.sleep(1000);
  console.log((await P05()) ? "P05: PASS" : "P05: FAIL");
  await driver.quit();
}

async function P01() {
  await driver.findElement(By.xpath("//div/p[text() = '¢550']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '¢550']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '¢600']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '¢600']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '¢600']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '¢500']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '¢725']")).click();
  await driver.sleep(1000);
  return (
    (await driver
      .findElement(By.xpath("//div/p[text() = '4125']"))
      .getText()) === "4125"
  );
}

async function P02() {
  await driver.findElement(By.xpath("//div/p[text() = '¢550']")).click();
  for (let i = 0; i < 9; i++) {
    await driver.findElement(By.xpath("//div/p[text() = '¢600']")).click();
  }
  await driver.sleep(1000);
  try {
    return await (
      await driver.findElement(By.className("MuiAlert-message")).getText()
    ).startsWith("No hay suficientes unidades de este producto");
  } catch (error) {
    return false;
  }
}

async function P03() {
  await driver.findElement(By.xpath("//img[@alt='coin']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '25']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '500']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
  await driver.sleep(1000);
  return (
    (await driver
      .findElement(By.xpath("//div/p[text() = 'su vuelto es de 975 colones']"))
      .getText()) === "su vuelto es de 975 colones"
  );
}

// test error when not enough coins for change
async function P04() {
  await driver.findElement(By.xpath("//img[@alt='coin']")).click();
  for (let i = 0; i < 10; i++) {
    await driver.findElement(By.xpath("//div/p[text() = '¢550']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '500']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '25']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
    await driver.findElement(By.xpath("//img[@alt='coin pile']")).click();
    setTimeout(() => {
      driver.findElement(By.xpath("//img[@alt='fanta']")).click();
    }, 300);

    await driver.sleep(300);
  }
  for (let i = 0; i < 2; i++) {
    await driver.findElement(By.xpath("//div/p[text() = '¢725']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '500']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
    await driver.findElement(By.xpath("//img[@alt='coin pile']")).click();
    setTimeout(() => {
      driver.findElement(By.xpath("//img[@alt='sprite']")).click();
    }, 300);

    await driver.sleep(300);
  }
  await driver.findElement(By.xpath("//div/p[text() = '¢725']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '500']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
  await driver.sleep(1000);
  try {
    return await (
      await driver.findElement(By.className("MuiAlert-message")).getText()
    ).startsWith("La maquina no tiene suficientes monedas para el cambio");
  } catch (error) {
    return false;
  }
}

// test out of service when no remaining coins
async function P05() {
  await driver.findElement(By.xpath("//img[@alt='coin']")).click();
  for (let i = 0; i < 10; i++) {
    await driver.findElement(By.xpath("//div/p[text() = '¢550']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '500']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '25']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
    await driver.findElement(By.xpath("//img[@alt='coin pile']")).click();
    setTimeout(() => {
      driver.findElement(By.xpath("//img[@alt='fanta']")).click();
    }, 300);

    await driver.sleep(300);
  }
  for (let i = 0; i < 2; i++) {
    await driver.findElement(By.xpath("//div/p[text() = '¢725']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '500']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
    await driver.findElement(By.xpath("//img[@alt='coin pile']")).click();
    setTimeout(() => {
      driver.findElement(By.xpath("//img[@alt='sprite']")).click();
    }, 300);

    await driver.sleep(300);
  }
  for (let i = 0; i < 7; i++) {
    await driver.sleep(300);
    await driver.findElement(By.xpath("//div/p[text() = '¢500']")).click();
    await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
    await driver.findElement(By.xpath("//img[@alt='coin pile']")).click();
    setTimeout(() => {
      driver.findElement(By.xpath("//img[@alt='coca-cola']")).click();
    }, 300);
  }
  await driver.sleep(300);
  await driver.findElement(By.xpath("//div/p[text() = '¢500']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '100']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '25']")).click();
  await driver.findElement(By.xpath("//div/p[text() = '1000']")).click();
  await driver.findElement(By.xpath("//img[@alt='coin pile']")).click();
  setTimeout(() => {
    driver.findElement(By.xpath("//img[@alt='coca-cola']")).click();
  }, 300);
  await driver.sleep(1000);
  return (
    (await driver
      .findElement(By.xpath("//div/p[text() = 'Fuera de servicio']"))
      .getText()) === "Fuera de servicio"
  );
}

UITest();
