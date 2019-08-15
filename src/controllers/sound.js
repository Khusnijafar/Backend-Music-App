const soundModels = require('../models/sound')
const miscHelpers = require('../helpers/helpers')
const cloudinary = require('cloudinary').v2

module.exports = {
    insertSound: async (req, res) => {
        console.log(req.file);
        
        let path = req.file.path
        let filename = req.file.filename.replace(/\s/g, '')
        let getUrl = async () => {
            cloudinary.config({
                cloud_name: 'dwv9umye9',
                api_key: '814525311932543',
                api_secret: 'wiWIl-Goh-Ll1XLceh71lQoBqfw'
            })
            const options = { public_id: filename, resource_type: "video", bytes_limit: 50825347 }
            let data
            await cloudinary.uploader.upload(path, options, (error, result) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result
            })

            return data
        }
        let result
        await getUrl().then((res) => {
            result = res
            console.log(res);
            
        }).catch((err) => {
            console.log(err);
        })

        const data = {
            sound: `https://res.cloudinary.com/dwv9umye9/video/upload/v${result.version}/${filename}.${result.format}`
        }

        soundModels.insertSound(data)
        .then((resultSound) => {
            const result = resultSound
            miscHelpers.response(res, result, 200, data)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    getSound: (req, res) => {
        soundModels.getSound()
        .then((resultSound) => {
            const result = resultSound
            miscHelpers.response(res, result, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}