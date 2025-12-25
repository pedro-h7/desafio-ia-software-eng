# Desafio: AI-Driven Software Engineering 🚀

[![Node.js CI](https://github.com/pedro-h7/desafio-ia-software-eng/actions/workflows/node.js.yml/badge.svg)](https://github.com/pedro-h7/desafio-ia-software-eng/actions/workflows/node.js.yml)

## 📋 Sobre o Projeto
Este repositório foi desenvolvido como parte do desafio de IA aplicada à Engenharia de Software. O objetivo é demonstrar como o uso de **IA Generativa (GitHub Copilot)** somado à **Automação (GitHub Actions)** resolve o dilema entre velocidade de entrega e qualidade de código.

---

## 🧠 Parte Teórica: IA no Fluxo de Desenvolvimento

### 1. Análise do Problema (Contexto do Desafio)
A equipe da empresa fictícia enfrentava um gargalo crítico: a pressão por novas funcionalidades resultava em ciclos de entrega lentos ou em um aumento alarmante de bugs. Os principais problemas identificados foram:
* **Desenvolvimento Lento**: Gasto excessivo de tempo em tarefas repetitivas e configurações iniciais.
* **Baixa Cobertura de Testes**: A escrita de testes era vista como uma tarefa demorada e pouco gratificante pela equipe.
* **Ciclo de Feedback Demorado**: Sem automação, os bugs eram descobertos tardiamente, tornando a correção mais cara e complexa.

### 2. O Papel da IA no Desenvolvimento
Para solucionar esses problemas, implementamos uma estratégia baseada em IA e CI/CD:
* **GitHub Copilot (Geração de Código e Testes)**: Utilizado para acelerar a escrita da lógica de negócio e, principalmente, para gerar testes unitários de forma instantânea. Isso elimina a percepção de que testar "tira tempo" do desenvolvimento.
* **GitHub Actions (Automação de Qualidade)**: Garante que cada "push" passe por uma verificação automática. Se a IA ou o desenvolvedor cometerem um erro, o pipeline falha imediatamente, impedindo que o bug chegue à produção.

### 3. Estudo de Caso Real
Um exemplo real dessa transformação é o caso da **Duolingo**. Ao adotar o GitHub Copilot, a empresa relatou que seus desenvolvedores conseguiram acelerar a entrega de código em cerca de 25%. Essa eficiência permitiu que a equipe focasse em inovação e na qualidade da experiência do usuário, em vez de se prender a tarefas mecânicas de programação.

---

## 🛠️ Parte Prática: Implementação Técnica

### Tecnologias Utilizadas
- **Node.js**: Ambiente de execução.
- **Jest**: Framework de testes (gerado via Copilot).
- **GitHub Copilot**: IA utilizada para criar a função de cálculo e os testes.
- **GitHub Actions**: Automação do pipeline de CI (Continuous Integration).

### Como rodar os testes localmente
```bash
npm install
npm test