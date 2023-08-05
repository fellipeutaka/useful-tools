import { type Dictionary } from "./en";

const dictionary = {
  general: {
    tools: "ferramentas",
    pricing: "preço",
    about: "sobre",
  },
  components: {
    navbar: {
      pricing: {
        "toast.title": "É de graça! 😜",
        "toast.description": "Esse projeto é código aberto e de graça. 🥳",
      },
      links: {
        github: "Meu perfil do GitHub",
        twitter: "Meu perfil do Twitter",
      },
      search: "Pesquisar...",
      "search.placeholder": "Digite um comando ou pesquise",
      main: {
        tools: "ferramentas",
        about: "sobre",
        github: "github",
        twitter: "twitter",
      },
      command: {
        tools: "Ferramentas",
        theme: "Tema",
        light: "Claro",
        dark: "Escuro",
        system: "Sistema",
      },
    },
    footer:
      "Desenvolvido por {author}. O código fonte está disponível no {github}.",
    toast: {
      success: "Sucesso",
      error: "Erro",
      warning: "Aviso",
    },
    "copy-button": {
      copy: "Copiar para a área de transferência",
      copied: "Copiado!",
    },
  },
  pages: {
    "not-found": {
      title: "Página não encontrada",
      description:
        "A página que você está procurando não existe ou foi movida. Por favor, verifique o URL e tente novamente.",
      "go-home": "Ir para a página inicial",
    },
    home: {
      title: "Uma coleção das melhores {tools}. Só para você",
      subtitle:
        "Useful Tools é uma coleção de ferramentas online gratuitas. Temos mais de 100 ferramentas para ajudá-lo em sua rotina.",
      "get-started": "Comece agora",
      features: {
        title: "Recursos",
        subtitle:
          "Este projeto possui diversos recursos que irão ajudá-lo em sua vida diária.",
        cryptography: {
          title: "Criptografia",
          description: "Binário, código Morse, hexadecimal, Base64 e mais.",
        },
        text: {
          title: "Texto",
          description:
            "Converter maiúsculas/minúsculas, remover acentos, remover duplicatas e mais.",
        },
        clock: {
          title: "Relógio",
          description: "Alarme, Cronômetro, Temporizador e mais.",
        },
        currency: {
          title: "Moeda",
          description:
            "Converter entre moedas. Mais de 100 moedas disponíveis.",
        },
        files: {
          title: "Arquivos",
          description: "Imagens, Vídeos, Áudios, Documentos e mais.",
        },
        devtools: {
          title: "Desenvolvedor",
          description:
            "Formatador JSON, minificador CSS, minificador HTML e mais.",
        },
      },
      "open-source": {
        title: "Código Aberto",
        subtitle: {
          first:
            "Useful Tools é um projeto de código aberto e apoia projetos de código aberto.",
          second: "O código está disponível no",
        },
        "stars#one": "1 estrela no GitHub",
        "stars#other": "{count} estrelas no GitHub",
      },
    },
    about: {
      title: "Sobre",
      subtitle:
        "Useful Tools é uma coleção de ferramentas online gratuitas. Temos mais de 100 ferramentas para ajudá-lo em sua vida diária. Este projeto é de código aberto e você pode contribuir com ele {link}.",
      "subtitle.link": "clicando aqui",
      credits: {
        title: "Créditos",
        topics: {
          tailwind: "Para estilização.",
          "radix-ui": "Para os componentes primitivos.",
          "shadcn/ui": "Para os componentes.",
          lucide: "Para os ícones.",
          vercel: "Onde eu hospedo todos meus projetos.",
        },
      },
      author: "Autor",
    },
    tools: {
      clock: {
        title: "Relógio",
      },
      stopwatch: {
        title: "Cronômetro",
        start: "Iniciar",
        stop: "Parar",
        clear: "Limpar",
      },
      "color-picker": {
        title: "Seletor de Cores",
      },
      "random-color": {
        title: "Cor Aleatória",
        generate: "Nova cor",
      },
      "binary-code": {
        title: "Código Binário",
        encode: "Texto para binário",
        decode: "Binário para texto",
      },
      "caesar-cipher": {
        title: "Cifra de César",
        encode: "Texto para cifra",
        decode: "Cifra para texto",
        key: "Chave",
        actions: {
          code: "Codificar",
          decode: "Decodificar",
        },
      },
      "hex-code": {
        title: "Código Hexadecimal",
        encode: "Texto para hexadecimal",
        decode: "Hexadecimal para texto",
        actions: {
          code: "Codificar",
          decode: "Decodificar",
        },
      },
      "morse-code": {
        title: "Código Morse",
        encode: "Texto para código Morse",
        decode: "Código Morse para texto",
        actions: {
          code: "Codificar",
          decode: "Decodificar",
        },
      },
      "qr-code": {
        title: "Código QR",
        placeholder: "Digite seu website, texto ou link aqui",
        hint: "(Seu Código QR será gerado automaticamente)",
        actions: {
          download: "Baixar",
          share: {
            whatsapp: "Compartilhar no WhatsApp",
            twitter: "Compartilhar no Twitter",
          },
        },
      },
      "password-generator": {
        title: "Gerador de Senhas",
        placeholder: "Senha",
        length: "Número de caracteres: {length}",
        actions: {
          generate: "Gerar",
        },
      },
      length: {
        title: "Comprimento",
        kilometer: "Quilômetro",
        meter: "Metro",
        centimeter: "Centímetro",
        millimeter: "Milímetro",
        micrometers: "Micrômetros",
        nanometers: "Nanômetros",
        mile: "Milha",
        yard: "Jarda",
        foot: "Pé",
        inch: "Polegada",
        "nautical mile": "Milha Náutica",
      },
      "css-minifier": {
        title: "Minificador de CSS",
        actions: {
          minify: "Minificar",
          minifying: "Minificando",
        },
        toast: {
          success: "CSS minificado com sucesso",
          required: "Por favor, insira algum CSS para minificá-lo",
        },
      },
      "json-formatter": {
        title: "Formatador de JSON",
        placeholder: "Número de espaços",
        actions: {
          format: "Formatar",
          formatting: "Formatando",
        },
        toast: {
          "invalid-json": "JSON inválido",
          "invalid-number": "Por favor, insira um número válido",
          success: "JSON formatado com sucesso",
          required: "Por favor, insira um JSON para formatá-lo",
        },
      },
      "text-converter": {
        title: "Conversor de Texto",
        "clear-input": "Limpar entrada",
        placeholder: {
          input: "Digite algo aqui...",
          output: "Resultado",
        },
        actions: {
          uppercase: "Converter para maiúsculas",
          lowercase: "Converter para minúsculas",
          capitalize: "Capitalizar",
          reverse: "Inverter",
          "remove-spaces": "Remover espaços",
          "remove-accents": "Remover acentos",
          "remove-duplicates": "Remover duplicatas",
          "remove-empty-lines": "Remover linhas vazias",
          "pascal-case": "Converter para Pascal case",
          "camel-case": "Converter para Camel case",
          "snake-case": "Converter para Snake case",
          "kebab-case": "Converter para Kebab case",
          "remove-special-characters": "Remover caracteres especiais",
        },
        toast: {
          "success-uppercase": "Convertido para maiúsculas com sucesso",
          "success-lowercase": "Convertido para minúsculas com sucesso",
          "success-capitalize": "Capitalizado com sucesso",
          "success-reverse": "Revertido com sucesso",
          "success-remove-spaces": "Espaços removidos com sucesso",
          "success-remove-accents": "Acentos removidos com sucesso",
          "success-remove-duplicates": "Duplicatas removidas com sucesso",
          "success-remove-empty-lines": "Linhas vazias removidas com sucesso",
          "success-pascal-case": "Convertido para Pascal case com sucesso",
          "success-camel-case": "Convertido para Camel case com sucesso",
          "success-snake-case": "Convertido para Snake case com sucesso",
          "success-kebab-case": "Convertido para Kebab case com sucesso",
          "success-remove-special-characters":
            "Caracteres especiais removidos com sucesso",
          required: "Please enter some text to convert",
        },
      },
      currency: {
        title: "Moeda",
        source: "Fonte",
        result: "{from} equivale a {to}",
        placeholder: "Pesquisar moeda...",
        "not-found": "Nenhuma moeda encontrada.",
      },
      todo: {
        title: "Lista de Tarefas",
        placeholder: "Adicionar nova tarefa",
        actions: {
          create: "Criar nova tarefa",
          delete: "Excluir tarefa",
        },
      },
    },
  },
} as const satisfies Dictionary;

export default dictionary;
