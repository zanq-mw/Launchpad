const list = [];

for (let i = 1; i <= 5; i++) {
  const datetime = new Date();
  const notificationId = i;
  const applicationId = i;

  const obj = {
    notificationId,
    subject: "Application In Review",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id. Velit egestas dui id ornare arcu odio. Elementum integer enim neque volutpat ac tincidunt. Sit amet nisl suscipit adipiscing bibendum est. Vulputate enim nulla aliquet porttitor lacus. Mi quis hendrerit dolor magna eget. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Imperdiet dui accumsan sit amet. Quisque non tellus orci ac auctor augue mauris. Ut morbi tincidunt augue interdum velit euismod in. Eu lobortis elementum nibh tellus molestie nunc. Eget arcu dictum varius duis at consectetur lorem. Nullam ac tortor vitae purus faucibus. Ac tincidunt vitae semper quis. Arcu dictum varius duis at consectetur lorem donec.",
    dateTime: datetime,
    read: true,
    saved: true,
    applicationId,
  };

  const obj2 = {
    notificationId: 24 + notificationId,
    subject: "Congratulations!",
    body: "Lol jk",
    dateTime: new Date(),
    read: false,
    saved: false,
    applicationId: 24 + applicationId,
  };

  list.push(obj);
  list.push(obj2);
}

export const mock_data = list;
