const renameFile = (file, name) => {
    const extention = file.name.split('.')?.at(-1)
    return name + "." + extention}

module.exports = renameFile