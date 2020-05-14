int pino_led_vermelho= 9;

void setup() {
  pinMode(pino_led_vermelho, OUTPUT);
}

void loop() {
  digitalWrite(pino_led_vermelho,HIGH);
  delay (1000);
  digitalWrite(pino_led_vermelho,LOW);
  delay (1000);

}