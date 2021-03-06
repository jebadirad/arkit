"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const logger_1 = require("./logger");
const DEFAULT_COMPONENTS = {
    type: 'Component',
    patterns: ['**/*.ts', '**/*.js', '**/*.jsx', '**/*.tsx']
};
exports.DEFAULT_CONFIG = {
    components: DEFAULT_COMPONENTS,
    excludePatterns: ['node_modules/**', 'test/**', 'tests/**', '**/*.test.*', '**/*.spec.*'],
    output: {}
};
class Config {
    constructor(options) {
        this.patterns = [];
        this.excludePatterns = [];
        this.extensions = ['.js', '.ts', '.jsx', '.tsx'];
        this.directory = options.directory;
        const userConfigPath = path.join(this.directory, 'arkit');
        const userConfig = this.safeRequire(userConfigPath);
        this.components = this.array(userConfig && userConfig.components) || [];
        if (!this.components.length) {
            this.components.push(DEFAULT_COMPONENTS);
        }
        this.outputs = this.getOutputs(options, userConfig);
        if (userConfig && userConfig.excludePatterns) {
            this.excludePatterns.push(...userConfig.excludePatterns);
        }
        else if (!userConfig && exports.DEFAULT_CONFIG.excludePatterns) {
            this.excludePatterns.push(...exports.DEFAULT_CONFIG.excludePatterns);
        }
        for (const component of this.components) {
            if (component.patterns) {
                this.patterns.push(...component.patterns);
            }
            if (component.excludePatterns) {
                this.excludePatterns.push(...component.excludePatterns);
            }
        }
    }
    getOutputs(options, userConfig) {
        const generatedSchema = {};
        if (options.output && options.output.length) {
            generatedSchema.path = options.output;
        }
        if (options.first && options.first.length) {
            generatedSchema.groups = [{ first: true, patterns: options.first }];
        }
        if (Object.keys(generatedSchema).length || !userConfig || !userConfig.output) {
            return this.array(generatedSchema);
        }
        return this.array(userConfig.output);
    }
    safeRequire(path) {
        try {
            return require(path);
        }
        catch (e) {
            logger_1.trace(e.toString());
        }
    }
    array(input) {
        if (input) {
            return [].concat(input);
        }
    }
}
exports.Config = Config;
