export default{
    name:'works',
    title:'Works',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'role',
            title:'Role',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'link',
            title:'Link',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },

        {
            name:'from',
            title:'From',
            type:'date'
        },
        {
            name:'to',
            title:'To',
            type:'date'
        },

        {
            name: 'tags',
            title: 'Tags',
           type:'array',
           of: [
             {
               name:'tag',
               title:'Tag',
               type:'string'
             }
           ]
          },
        
    ]
}