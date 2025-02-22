export  const integrationConfig = {
    data: {
      date: {
        created_at: "2025-02-20",
        updated_at: "2025-02-20"
      },
      descriptions: {
        app_description: "Writers Revise is an innovative backend integration designed to enhance student essay writing through automated revision, editing, proofreading, and word count analysis. When a student submits an essay, the tool intercepts the text and employs advanced natural language processing to identify and correct grammatical, punctuation, and stylistic errors. In addition to delivering a refined version of the essay with contextual suggestions for clarity and precision, it also automatically calculates word counts, helping students adhere to assignment guidelines and improve conciseness. This comprehensive approach not only polishes written work but also educates students on effective writing techniques, making it a valuable learning resource.",
        app_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqbRu8V-rK7gnALja0roK4Z6gLLzgnkwLKw&s",
        app_name: "Writers Revise: A Smart Essay Editing, Proofreading, and Word Count Integration",
        app_url: "https://telex-integration-57kp.onrender.com",
        background_color: "#00000"
      },
      integration_category: "Monitoring & Logging",
      integration_type: "modifier",
      is_active: true,
      output: [
        {
          "label": "output_channel_1",
          "value": true
        },
        {
          "label": "output_channel_2",
          "value": false
        }
      ],
      key_features: [
        "Uses advanced NLP to identify and correct grammatical, punctuation, and stylistic errors, ensuring polished and error-free essays.",
        "Provides in-depth feedback and clarity-enhancing suggestions that help students understand and improve their writing techniques.",
        "Automatically calculates word counts to help students meet assignment guidelines, ensuring essays remain concise and within required limits."
      ],
      permissions: {
        "monitoring_user": {
          "always_online": true,
          "display_name": "Performance Monitor"
        }
      },
      settings: [
        {
          label: "Occupation",
          type: "dropdown",
          required: true,
          default: "Student",
          options: ["Writer", "Student"]
        },
        {
          label: "Activate W",
          type: "checkbox",
          required: true,
          default: "Yes"
        },
        {
          label: "Summarisation Level",
          type: "dropdown",
          required: true,
          default: "Low",
          options: ["High", "Low"]
        },
        {
          label: "Alert Admin",
          type: "multi-checkbox",
          required: true,
          default: "Super-Admin",
          options: ["Super-Admin", "Admin", "Manager", "Developer"]
        }
      ],
      target_url: "https://telex-integration-57kp.onrender.com/webhook",
      endpoint: [
        {
            path: "/webhook",
            method: "POST",
            description: "Receives messages and returns AI-generated responses",
        },
      ],
      author: "Nnatuanya Frank",
      version: "1.0.0"
    }
  }